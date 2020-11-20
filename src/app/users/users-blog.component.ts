import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {PostsService} from "../posts/posts.service";
import {HeaderService} from "../shared/services/header.service";
import { Subscription }   from 'rxjs/Subscription';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-users-blog',
  templateUrl: './users-blog.component.html',
  styleUrls: []
})
export class UsersBlogComponent implements OnInit {
  routeSubscription: any;
  id: number = 0;
  objects: any = [];
  announces: any = [];
  comments: any = [];
  type: string = 'main';
  selectedObjects: any = [];
  user_id: number = 0;
  user: any = {ban: false,};

  previousTop: number = 0;
  posts_load_count: number = 20;
  scroll_direction: number = 0;
  queue_interval: any;
  announces_load_count: number = 3;
  comments_load_count: number = 20;
  comments_votes: any = {};

  subscription: Subscription;
  event_voted: Subscription;
  event_post_edited: Subscription;

  tag: string = '';
  current_user_votes: any = {};
  comments_current_user_votes: any = {};
  votes: any = [];
  isCanScroll: boolean = false;

  page: string = '/';
  login: string = '';

  TODO: boolean = false;

  isDragging: boolean = false;

  isFirstLoad: boolean = true;
  isLoading: boolean = false;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    for (let i = 0; i < event.path.length; i++) {
      if (event.path[i].className && event.path[i].className.length > 0 && event.path[i].className.indexOf("simpleDropdown__container") !== -1) return;
    }

    for (let i = 0; i < this.objects.length; i++) {
      this.objects[i].is_show_votes = false;
      this.objects[i].is_show_price = false;
      this.objects[i].is_show_profile = false;
      this.objects[i].is_show_comments = false;
      this.objects[i].is_show_vote = false;
      this.objects[i].is_show_flag = false;
    }
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
      o[i].is_show_flag = false;
      o[i].is_show_vote = false;

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

    this.type = 'blog_posts';

    if (this.type == 'main') {
      let postid = this.announces.length - 1;
      if (this.announces.length > 2) postid = this.announces.length - 3;

      if (postid > -1 && this.isScrolledIntoView(document.getElementById('announcementid'+postid)) && direction) this.scroll_direction = 1;

    } else {
      if (this.type == 'comments') {
        let postid = this.comments.length - 1;
        if (this.comments.length > 2) postid = this.comments.length - 3;

        if (postid > -1 && this.isScrolledIntoView(document.getElementById('commentid'+postid)) && direction) this.scroll_direction = 1;
      } else {
        let postid = this.objects.length - 1;
        if (this.objects.length > 2) postid = this.objects.length - 3;

        if (postid > -1 && this.isScrolledIntoView(document.getElementById('postid'+postid)) && direction) this.scroll_direction = 1;
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

    this.subscription = headerService.postListChanged$.subscribe(
      data => {
        console.log('in');
        if (data && data.posts_load_count) this.posts_load_count += data.posts_load_count;

        if (this.type != 'main') {
          if (data && data.noscroll) this.load(true);
          else this.load();
        }
      });

    this.event_voted = headerService.voted$.subscribe(
      data => {
        this.current_user_votes[data.id] = data.weight;
      });

    this.event_post_edited = headerService.postEdited$.subscribe(
      data => {
      console.log('edited event');
        this.load();
      });
    }

  ngOnInit() {
    this.initScroll();

    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    };

    this.routeSubscription = this.route.params.subscribe(
      params => {
        if (params['tag']) this.tag = params['tag'];

        this.login = params['login'];

        this.loadUser();

        this.queue_interval = setInterval(() => {
          if (this.scroll_direction == 0) return;

          if (this.scroll_direction == 1) {
            this.posts_load_count += 20;
          }

          this.scroll_direction = 0;

          if (this.type != 'main' && this.type != 'comments') this.load();
        }, 2000);
      });
  }

  ngOnDestroy() {
    clearInterval(this.queue_interval);
    this.routeSubscription.unsubscribe();

    this.subscription.unsubscribe();
    this.event_voted.unsubscribe();
    this.event_post_edited.unsubscribe(); 
  }

  initScroll() {
  }

  loadUser() {
    this.postsService.getUser({name: this.login})
      .subscribe((data) => {
        let user: any = {};

        this.user = data.user;

        this.id = data.user.id;
        this.user_id = this.id;

        this.page = '/@'+this.login;

        this.load();
      });
  }

  load(force: boolean = false) {
    this.isLoading = true;

    let params: any = {count: this.posts_load_count, type: 'blog', user_id: parseInt(""+this.user_id)};

    if (this.tag.length > 0) {
      let isRubric = false;
      let rubrics = JSON.parse(localStorage.getItem('rubrics'));
      if (rubrics.length < 4) rubrics = [];

      for (let i =0; i < rubrics.length; i++) {
        if (rubrics[i].name.toLowerCase() == this.tag.toLowerCase()) isRubric = true;
      }

      if (!isRubric) params['tags'] = [this.tag];
      else params['rubrics'] = [this.tag];
    }

    this.postsService.articelsGetAll(params)
      .subscribe((data) => {
        if (data.list) {
          for (let i = 0; i < data.list.length; i++) {
            data.list[i].metadata = JSON.parse(data.list[i].metadata);
            data.list[i].displayName = this.postsService.getUserDisplayName(data.list[i].user);
            data.list[i].displayNameBlog = this.postsService.getUserDisplayNameBlog(data.list[i].user);
          }

          if (this.objects.length > 0 && data.list.length > 0 && this.objects[0].id == data.list[0].id) this.isCanScroll = false;

          if (!force) {
            for (let i = 0; i < this.objects.length; i++) {
              for (let z = 0; z < data.list.length; z++) {
                if (this.objects[i].id == data.list[z].id) {
                  data.list[z] = this.objects[i];
                }
              }
            }
          }

          if (data.list.length == 0 && params['tags']) this.objects = [];

          if (data.list.length > 0) this.objects = data.list;
          else this.isCanScroll = false;

          if (this.objects.length > 0) this.current_user_votes = data.current_user_votes;
          else this.current_user_votes = {};

          if (this.objects.length > 0) this.votes = data.votes;
          else this.votes = {};

          if (this.isFirstLoad) this.initScroll();
          this.isFirstLoad = false;
          this.isLoading = false;

          this.headerService.eventList({origin: 'blog', type: 'posts', list: this.objects});
        }

        this.postsService.initPostJS();

        this.postsService.processJWT(data);
      });
  }
}
