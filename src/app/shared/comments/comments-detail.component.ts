import { Component, HostListener, Input, OnInit } from '@angular/core';

import {PostsService} from "../../posts/posts.service";
import { HeaderService } from '../../shared/services/header.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription }   from 'rxjs/Subscription';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-comments-detail',
  templateUrl: './comments-detail.component.html',
  styleUrls: []
})
export class CommentsDetailComponent {
  id: number;
  commentId: number;
  returnUri: string;

  routeSubscription: any;
  object: any = {
    metadata: {
      tags: [],
    },
    user: {},
  };

  share: any = {
    subject: '',
    body: '',
    url: '',
  };

  comments: any = [];
  comment: any = {
    content: {
      parent_author: '',
      parent_permlink: '',
      author: '',
      permlink: '',
      body: '',
      parent_id: 0,
    }
  };

  percentages = [];
  vote_post_percentage: number = 100;

  auId: number = 0;
  auName: string = '';
  user: any;

  subscription: Subscription;

  isCommentsVisible: boolean = false;

  current_user_votes: any = {};

  comments_votes: any = {};

  TODO: boolean = false;

  returnFeed: boolean = false;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    for (let i = 0; i < event.path.length; i++) {
      if (event.path[i].className && event.path[i].className.length > 0 && event.path[i].className.indexOf("simpleDropdown__container") !== -1) return;
    }

    this.object.is_show_votes = false;
    this.object.is_show_price = false;
    this.object.is_show_profile = false;
    this.object.is_show_comments = false;
    this.object.is_show_flag = false;
    this.object.is_show_vote = false;

    if (this.comments && this.comments.length > 0) this.resetCommentsTooltips(this.comments);
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

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService,
    ) {
    this.subscription = headerService.openComments$.subscribe(
      data => {
        this.id = data.id;
        this.commentId = data.commentId;

        if (data.returnUri instanceof Array) data.returnUri = data.returnUri[0];
        this.returnUri = data.returnUri;

        this.auId = this.postsService.getUserId();

        setTimeout(() => {
          $.magnificPopup.open({
            items: {
              src: '#p-comments'
            },
            callbacks: {
              open: function() {
              },
              close: () => {
                setTimeout(() => {
                  if (data.isBlogComments) return;

                  if (this.returnUri && this.returnUri.length > 0 && this.returnUri.indexOf('/comments/') > 0) return;

                  if (window.location.pathname.indexOf('/@') !== -1) return;

                  if (this.returnUri && this.returnUri.length > 0 && this.returnUri.replace('/appdev', '') != '/posts/comments') this.router.navigate([this.returnUri]);

                  if (this.returnUri.replace('/appdev', '') == '/posts/comments') {
                    window.history.pushState('Stihi.io', 'Stihi.io', '/posts/comments');
                  }

                  //this.router.navigate(['/posts/' + this.id]);
                }, 150);

              }
            }
          });
        }, 300);

        this.ngOnInit();
      });

    this.subscription = headerService.commentChanged$.subscribe(
      data => {
      console.log('in44');
        this.loadComments(true);
      });

    this.percentages = [];
    for (let i =0; i < 11; i++) {
      this.percentages.push(10*i);
    }
  }

  goToPost() {
    $.magnificPopup.close();

    setTimeout(() => {
      setTimeout(() => {
        this.router.navigate(['/posts/' + this.id], { queryParams: { return: '/posts/'+this.id+'/comments/'+this.commentId } });
      }, 150);

      this.router.navigate(['/posts/new']);
    }, 150);
  }

  ngOnInit() {
    /*
    this.routeSubscription = this.route.params.subscribe(
      params => {
        this.id = params['id'];


      });
      */

    if (isNaN(this.id)) return;

    this.user = this.postsService.getSession();
    if (this.user && this.user.n) this.auName = this.user.n;

    this.load();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleProfile(o: any, newState: boolean) {
    setTimeout(() => {
      o.is_show_profile = false;

      o.is_show_profile = newState;
    }, 50);
  }

  toggleNewComment(o: any) {
    o.is_comment_form_visible = !o.is_comment_form_visible;
  }

  saveComment(o: any) {
    this.comment.content.body = o.comment_body;
    this.comment.content.author = this.postsService.getSession().n;
    this.comment.content.parent_author = this.object.author;
    this.comment.content.parent_permlink = this.object.parent_permlink;
    this.comment.content.parent_id = this.object.id;

    this.postsService.articelsSaveComment(this.comment)
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.load();

        this.cancelComment(this.object);

        this.postsService.processJWT(data);
      });
  }

  cancelComment(o: any) {
    o.is_comment_form_visible = false;
    o.comment_body = '';
    o.comment_title = '';
  }

  saveVote(id: number, percentage: number, direction: boolean) {
    let tmp = {
      vote: {
        content_id: id,
        weight: percentage * 100,
      }
    };

    if (!direction) tmp.vote.weight = tmp.vote.weight * -1;

    this.postsService.voteSave(tmp)
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }
        this.load();

        this.postsService.processJWT(data);
      });
  }

  load() {
    this.postsService.articelsGetOne({id: +this.id, source_list: {list: 'new'}})
      .subscribe((data) => {
        data.content.metadata = JSON.parse(data.content.metadata);

        this.returnFeed = true;

        data.content.displayName = this.postsService.getUserDisplayName(data.content.user);
        data.content.displayNameBlog = this.postsService.getUserDisplayNameBlog(data.content.user);
        data.content.displayNameLogin = this.postsService.getUserLogin(data.content.user);

        data.content.user.displayName = this.postsService.getUserDisplayName(data.content.user);
        data.content.user.displayNameBlog = this.postsService.getUserDisplayNameBlog(data.content.user);
        data.content.user.displayNameLogin = this.postsService.getUserLogin(data.content.user);

        this.object = data.content;

        this.share.subject = this.object.title + ' - stihi.io';
        this.share.body = 'https://stihi.io/posts/' + this.object.id;
        this.share.url = 'https://stihi.io/posts/' + this.object.id;

        this.postsService.processJWT(data);
      });

    this.loadComments();
  }

  loadComments(force: boolean = false) {
    if (!this.id) return;
    
    this.postsService.articelsGetComments({parent_id: +this.id, full: true})
      .subscribe((data) => {

        if (!force && this.comments) {
          for (let i = 0; i < this.comments.length; i++) {
            for (let z = 0; z < data.list.length; z++) {
              if (this.comments[i].id == data.list[z].id) {
                data.list[z] = this.comments[i];
              }
            }
          }
        }

        let tmp = [];
        if (data.list) {
          for (let i =0; i < data.list.length; i++) {
            data.list[i].displayName = this.postsService.getUserDisplayName(data.list[i].user);
            data.list[i].displayNameBlog = this.postsService.getUserDisplayNameBlog(data.list[i].user);
            data.list[i].displayNameLogin = this.postsService.getUserLogin(data.list[i].user);

            if (data.list[i].comments) {
              for (let a = 0; a < data.list[i].comments.length; a++) {
                data.list[i].comments[a].displayName = this.postsService.getUserDisplayName(data.list[i].comments[a].user);            
                data.list[i].comments[a].displayNameBlog = this.postsService.getUserDisplayNameBlog(data.list[i].comments[a].user);            
                data.list[i].comments[a].displayNameLogin = this.postsService.getUserLogin(data.list[i].comments[a].user);            

                if (data.list[i].comments[a].comments) {
                  for (let b = 0; b < data.list[i].comments[a].comments.length; b++) {
                    data.list[i].comments[a].comments[b].displayName = this.postsService.getUserDisplayName(data.list[i].comments[a].comments[b].user);            
                    data.list[i].comments[a].comments[b].displayNameBlog = this.postsService.getUserDisplayNameBlog(data.list[i].comments[a].comments[b].user);            
                    data.list[i].comments[a].comments[b].displayNameLogin = this.postsService.getUserLogin(data.list[i].comments[a].comments[b].user);            

                    if (data.list[i].comments[a].comments[b].comments) {
                      for (let c = 0; c < data.list[i].comments[a].comments[b].comments.length; c++) {
                        data.list[i].comments[a].comments[b].comments[c].displayName = this.postsService.getUserDisplayName(data.list[i].comments[a].comments[b].comments[c].user);
                        data.list[i].comments[a].comments[b].comments[c].displayNameBlog = this.postsService.getUserDisplayNameBlog(data.list[i].comments[a].comments[b].comments[c].user);            
                        data.list[i].comments[a].comments[b].comments[c].displayNameLogin = this.postsService.getUserLogin(data.list[i].comments[a].comments[b].comments[c].user);            

                      }
                    }

                  }
                }

              }
            }

            if (data.list[i].id == +this.commentId) tmp.push(data.list[i]);
          }
        }

        this.comments = tmp;

        if (data.current_user_votes) this.current_user_votes = data.current_user_votes;
        else this.current_user_votes = {};

        if (data.votes) this.comments_votes = data.votes;
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
