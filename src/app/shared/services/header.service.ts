import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import {PostsService} from "../../posts/posts.service";
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

declare var jquery:any;
declare var $ :any;

@Injectable()
export class HeaderService {
  constructor(
    protected postsService: PostsService,
    protected router: Router,
  ) {}

  initial_uri: string = '';
  return: string = '';
  original_uri: string = '';
  qp: any = {};
  navOriginalUri: string = '';
  paramReturnUri: string = '';
  paramId: number = 0;
  paramIsAnnouncement: boolean = false;
  lastListPostId: number = 0;

  // Observable string sources
  private profileChangedSource = new Subject<any>();
  private votedSource = new Subject<any>();
  private postEditedSource = new Subject<any>();
  private postChangedSource = new Subject<any>();
  private commentChangedSource = new Subject<any>();
  private postListChangedSource = new Subject<any>();
  private openCommentsSource = new Subject<any>();
  private subscriptionsSource = new Subject<any>();
  private subscribersSource = new Subject<any>();
  private listSource = new Subject<any>();

  // Observable string streams
  profileChanged$ = this.profileChangedSource.asObservable();
  voted$ = this.votedSource.asObservable();
  postEdited$ = this.postEditedSource.asObservable();
  postChanged$ = this.postChangedSource.asObservable();
  commentChanged$ = this.commentChangedSource.asObservable();
  postListChanged$ = this.postListChangedSource.asObservable();
  openComments$ = this.openCommentsSource.asObservable();
  subscriptions$ = this.subscriptionsSource.asObservable();
  subscribers$ = this.subscribersSource.asObservable();
  list$ = this.listSource.asObservable();

  // Service message commands
  eventProfileChanged(data?: any) {
    this.profileChangedSource.next(data);
  }
  eventVoted(data?: any) {
    this.votedSource.next(data);
  }
  eventPostEdited(data?: any) {
    this.postEditedSource.next(data);
  }
  eventPostChanged(data?: any) {
    this.postChangedSource.next(data);
  }
  eventCommentChanged(data?: any) {
    this.commentChangedSource.next(data);
  }
  eventPostListChanged(data?: any) {
    this.postListChangedSource.next(data);
  }
  eventOpenComments(data?: any) {
    this.openCommentsSource.next(data);
  }
  eventSubscriptions(data?: any) {
    this.subscriptionsSource.next(data);
  }
  eventSubscribers(data?: any) {
    this.subscribersSource.next(data);
  }
  eventList(data?: any) {
    this.listSource.next(data);
  }

  isNumeric(n: any) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  openPost(id: number, returnUri: string, blogId: number, isAnnouncement: boolean, queryParams: any, isPostOpenFromList: boolean) {
    this.original_uri = window.location.pathname;
    this.paramReturnUri = returnUri;
    this.paramId = id;
    this.paramIsAnnouncement = isAnnouncement;

    let tmp = window.location.pathname.split('/');

    if (!this.isNumeric(tmp[tmp.length - 1]) && this.navOriginalUri == '') {
      this.navOriginalUri = window.location.pathname;
    }

    window.history.pushState('Stihi.io', 'Stihi.io', '/posts/'+id);

    this.qp = queryParams;

    if (!this.qp['isBlogLink']) {
      console.log('yes');
      this.lastListPostId = id;
    }

    let articleParams = {
      id: +id,
      source_list: {
        list: 'list',
        sort_field: 'time',
        desc_order: false,
      }
    };

    // this.postsService.articelsGetOne(articleParams)
    // .subscribe((data) => {

        /*
        if (data && !data.content || data.content == null) {
          // this.content_banned = true;
          return 'banned';
        }
        */

        this.initial_uri = window.location.pathname;

        if (this.qp['isNavLink']) this.original_uri = this.paramReturnUri;

        let category = '';
        if (this.qp['category'] && this.qp['category'].length > 0) category = this.qp['category'];

        let leaderTime = null;
        if (this.qp['leaderTime'] && this.qp['leaderTime'] > 0) leaderTime = this.qp['leaderTime'];

        let dataParams = {
          id: id,
          uri: this.original_uri,
          blogId: blogId,
          isAnnouncement: isAnnouncement,
          isPostOpenFromList: isPostOpenFromList,
          category: category,
          leaderTime: leaderTime,
        };

        this.eventPostChanged(dataParams);

        setTimeout(()=>{
        	console.log('opening');
            $('.mfp-wrap.mfp-close-btn-in.mfp-auto-cursor.mfp-ready').animate({ scrollTop: 0 }, 0);
        }, 200);

        $.magnificPopup.open({
		  removalDelay: 300,
		  mainClass: 'mfp-fade',
          items: {
            src: '#p-page'
          },
          disableOn: () => {
            // return this.isDragging;
          },
          //closeOnBgClick: false,
          callbacks: {
            beforeOpen: function() {  this.wrap.removeAttr('tabindex') },
            open: function() {
            },
            close: () => {

              if (window.location.href.indexOf('/comments/') != -1) {
                let path = window.location.href.split('/');

                if (path.length > 4) {
                  this.openPost(+path[4], null, null, false, {}, true);
                }

                return;
              }

              setTimeout(() => {
                if (this.paramIsAnnouncement) {
                  if ($("[announcementlistelement="+this.lastListPostId+"]").length) $('html, body').animate({ scrollTop: $("[announcementlistelement="+this.lastListPostId+"]").offset().top - 200}, 0);
                } else {
                  if ($("[postlistelement="+this.lastListPostId+"]").length) $('html, body').animate({ scrollTop: $("[postlistelement="+this.lastListPostId+"]").offset().top - 200}, 0);
                }
              }, 300);

              if ((this.qp && this.qp['isNavLink']) || window.location.href.indexOf('isNavLink=true') != -1) {
                console.log(this.navOriginalUri, 'in');

                window.history.pushState('Stihi.io', 'Stihi.io', this.navOriginalUri);
                this.navOriginalUri = '';

                return;
              }

              window.history.pushState('Stihi.io', 'Stihi.io', this.original_uri);

              setTimeout(() => {
                if (window.location.pathname !== this.return && window.location.pathname !== '/posts/new' && window.location.pathname !== this.initial_uri) return;

                // this.router.navigate([this.return.replace('/main', '/index')]);
              }, 150);
            }
          }
        // });
      });
  }

  openComment(id: number, postId: number, returnUri: string = '') {
    this.original_uri = window.location.pathname;
    window.history.pushState('Stihi.io', 'Stihi.io', '/posts/'+postId+'/comments/'+id);

    this.postsService.articelsGetOne({id: + postId, source_list: {list: 'new'}})
      .subscribe((data) => {
        if (data && !data.content || data.content == null) {
          // this.content_banned = true;
          return 'banned';
        }

        let isBlogComments: boolean = false;
        if (location.href.indexOf('/comments') > 0 && location.href.indexOf('posts/comments') < 0) isBlogComments = true;

        this.eventOpenComments({id: postId, commentId: id, returnUri: this.original_uri, isBlogComments: isBlogComments});
        this.initial_uri = window.location.pathname;
      });
  }

  preProcessBody(body: string, editor: string) {
    if (body.indexOf('style="float:right"') !== -1) {
      body = body.replace('style="float:right"', 'style="float:right;margin: 15px;margin-top:0px;"');
    }

    if (body.indexOf('style="float:left"') !== -1) {
      body = body.replace('style="float:left"', 'style="float:left;margin: 15px;margin-top:0px;"');
    }

    if (editor == 'markdown') {
      //
    }

    return body;
  }

  setSharpayUrl() {
    let src = 'https://app.sharpay.io/api/widget/?s=fd422&u='+window.location.href+'&sc=true&btn=button&i='+$('.sharpay_widget_button iframe').attr('data-image');
    $('.sharpay_widget_button iframe').attr('src', src);
    console.log(src);
  }
}