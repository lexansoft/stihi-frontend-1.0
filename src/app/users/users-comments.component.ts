import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {PostsService} from "../posts/posts.service";
import {HeaderService} from "../shared/services/header.service";
import { Subscription }   from 'rxjs/Subscription';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-users-comments',
  templateUrl: './users-comments.component.html',
  styleUrls: []
})
export class UsersCommentsComponent implements OnInit {
  type: string = '';
  owner_cnt: number = 0;
  reply_cnt: number = 0;

  routeSubscription: any;
  id: number = 0;
  objects: any = [];
  announces: any = [];
  selectedObjects: any = [];
  user_id: number = 0;
  user: any = {ban: false,};

  previousTop: number = 0;
  posts_load_count: number = 20;
  scroll_direction: number = 0;
  queue_interval: any;
  announces_load_count: number = 3;
  comments_load_count: number = 20;

  tag: string = '';
  current_user_votes: any = {};
  comments_current_user_votes: any = {};
  votes: any = [];
  isCanScroll: boolean = false;
  login: string = '';
  page: string = '';
  commentsArticles: any = [];
  comments_votes: any = {};
  isLoading: boolean = false;
  queryParams: any = {};
  comments: any = [];

  isDragging: boolean = false;

  TODO: boolean = false;
  subscription_comments: Subscription;

  isFirstLoad: boolean = true;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    for (let i = 0; i < event.path.length; i++) {
      if (event.path[i].className && event.path[i].className.length > 0 && event.path[i].className.indexOf("simpleDropdown__container") !== -1) return;
    }

    this.resetCommentsTooltips(this.comments);
  }

  @HostListener('document:dragstart', ['$event'])
  onDragStart(event) {
    this.isDragging = true;
  }

  @HostListener('document:dragend', ['$event'])
  onDragEnd(event) {
    this.isDragging = false;
  }

  resetCommentsTooltips(o: any) {
    for (let i = 0; i < o.length; i++) {
      o[i].is_show_votes = false;
      o[i].is_show_price = false;
      o[i].is_show_profile = false;
      o[i].is_show_comments = false;

      if (o[i].comments && o[i].comments.length > 0) {
        this.resetCommentsTooltips(o[i].comments);
      }
    }
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let top  = window.pageYOffset || document.documentElement.scrollTop;

    let direction: boolean = false;
    if (top > this.previousTop) direction = true;

    if (this.objects.length == 0 && this.announces.length == 0 && this.comments.length == 0) return;

    if (top < 600 && !direction) this.scroll_direction = 2;

    if (this.type == 'main') {
      let postid = this.announces.length - 1;
      if (this.announces.length > 2) postid = this.announces.length - 3;

      if (postid > -1 && this.isScrolledIntoView(document.getElementById('announcementid'+postid)) && direction) this.scroll_direction = 1;

    } else {
      if (this.type == 'comments' || true) {
        let postid = this.comments.length - 1;
        if (this.comments.length > 2) postid = this.comments.length - 3;

        if (postid > -1 && this.isScrolledIntoView(document.getElementById('commentid'+postid)) && direction) this.scroll_direction = 1;
      }
    }

    this.previousTop = top;
  }

  isScrolledIntoView(elem) {
    let docViewTop = $(window).scrollTop();
    let docViewBottom = docViewTop + $(window).height();

    let elemTop = $(elem).offset().top;
    let elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService,
  ) {
    if (this.isFirstLoad) {
      this.isFirstLoad = false;
    }

    this.subscription_comments = headerService.commentChanged$.subscribe(
      data => {
        this.load('reply', true);
        this.load('owner', true);
      });  
  }

  initScroll() {
  }

  ngOnInit() {
    this.initScroll();

    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    };

    this.routeSubscription = this.route.params.subscribe(
      params => {
        if (this.route.snapshot.data.type) this.type = this.route.snapshot.data.type;
        
        this.login = params['login'];
        this.loadUser();

        this.queue_interval = setInterval(() => {
          if (this.scroll_direction == 0) return;

          if (this.scroll_direction == 1) {
            this.comments_load_count += 20;
          }

          this.scroll_direction = 0;

          this.load(this.type);
        }, 2000);
      });
  }

  loadUser() {
    this.postsService.getUser({name: this.login})
      .subscribe((data) => {
        let user: any = {};

        this.user = data.user;

        this.id = data.user.id;
        this.user_id = this.id;

        this.page = '/@'+this.login;

        this.load('reply');
        this.load('owner');

      });
  }

  ngOnDestroy() {
    clearInterval(this.queue_interval);
    this.routeSubscription.unsubscribe();

    this.subscription_comments.unsubscribe();
  }

  openSinglePost(id: number, returnUri: string) {
    this.headerService.openPost(id, returnUri, 0, false, this.queryParams, true);

    return false;
  }

  processComment(o: any) {
    for (let i =0; i < o.length; i++) {
      o[i].displayName = this.postsService.getUserDisplayName(o[i].user);
      o[i].displayNameBlog = this.postsService.getUserDisplayNameBlog(o[i].user);
      o[i].displayNameLogin = this.postsService.getUserLogin(o[i].user);

      if (o[i].comments && o[i].comments.length > 0) this.processComment(o[i].comments);
    }
  }

  load(load_type: string = null, force: boolean = false) {
    this.isLoading = true;

    let params: any = {user_id: parseInt(""+this.user_id), type: this.type, full: true, count: this.comments_load_count, mode: 'first'};

    if (load_type != null) params.type = load_type;

    this.postsService.getUserCommentsList(params)
      .subscribe((data) => {

        this.processComment(data.list);

      	let cnt = 0;

        this.owner_cnt = data.owner_count;
        this.reply_cnt = data.reply_count;

        this.isLoading = false;
        
    		if (this.type != load_type) {
    			return;
    		}

        if (!force) {
          for (let i = 0; i < this.comments.length; i++) {
            for (let z = 0; z < data.list.length; z++) {
              if (this.comments[i].id == data.list[z].id) {
                data.list[z] = this.comments[i];
              }
            }
          }
        }

        Object.keys(data.articles).forEach((key,index) => {
          data.articles[key].displayName = this.postsService.getUserDisplayName(data.articles[key].user);
          data.articles[key].displayNameBlog = this.postsService.getUserDisplayNameBlog(data.articles[key].user);
        });

        this.comments = [];

        this.comments = data.list;
        this.commentsArticles = data.articles;

        if (data.current_user_votes) this.comments_current_user_votes = data.current_user_votes;
        else this.comments_current_user_votes = {};

        if (this.comments && this.comments.length > 0) this.comments_votes = data.votes;
        else this.comments_votes = {};

        this.postsService.processJWT(data);
      });
  }

  getUserPower(value, type) {
    return this.postsService.getUserPower(value, type);
  }

  getUserReputation(value) {
    return this.postsService.getUserReputation(value);
  }

}
