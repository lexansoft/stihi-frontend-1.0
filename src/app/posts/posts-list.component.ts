import { Component, HostListener, Input, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import {PostsService} from "../posts/posts.service";
import {HeaderService} from "../shared/services/header.service";
import { Subscription }   from 'rxjs/Subscription';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styles: [''],
})
export class PostsListComponent implements OnInit, AfterViewInit {
  objects: any = [];
  type: string = 'main';
  articleType: string = 'new';
  routeSubscription: any;
  current_user_votes: any = {};
  current_user_votes_announces: any = {};

//
  user: any = {};
  userId: number = 0;
  userRole: string = 'u';

  isCanScroll: boolean = false;
  isCanScrollAnnouncements: boolean = false;

  postId: number = 0;
  commentId: number = 0;
  tag: string = '';
  subscription: Subscription;
  subscription_comments: Subscription;
  event_voted: Subscription;

  announces: any = [];
  time: number = 60 * 60 * 24 * 7;

  comments: any = [];
  comments_current_user_votes: any = {};

  votes: any = [];

  leader: any = {
    id: 0,
  };
  leader_current_user_votes: any = {};
  leader_votes: any = [];

  previousTop: number = 0;
  posts_load_count: number = 20;
  scroll_direction: number = 0;
  queue_interval: any;
  announces_load_count: number = 3;
  comments_load_count: number = 20;
  comments_votes: any = {};

  return: string = '';
  page: string = '/posts/new';
  initial_uri: string = '';

  new_authors: any = [];

  content_banned: boolean = false;

  TODO: boolean = false;

  commentsArticles: any = [];

  isDragging: boolean = false;

  isFirstLoad: boolean = true;

  invites: any = [];

  isLoading: boolean = false;

  isBlogLink: boolean = false;
  isNavLink: boolean = false;
  queryParams: any = {};

  paramId: number = 0;
  paramIsAnnouncement: boolean = false;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    for (let i = 0; i < event.path.length; i++) {
      if (event.path[i].className && event.path[i].className.length > 0 && event.path[i].className.indexOf("simpleDropdown__container") !== -1) return;
    }

    this.leader.is_show_votes = false;
    this.leader.is_show_price = false;
    this.leader.is_show_profile = false;
    this.leader.is_show_comments = false;
    this.leader.is_show_vote = false;
    this.leader.is_show_flag = false;

    for (let i = 0; i < this.objects.length; i++) {
      this.objects[i].is_show_votes = false;
      this.objects[i].is_show_price = false;
      this.objects[i].is_show_profile = false;
      this.objects[i].is_show_comments = false;
      this.objects[i].is_show_vote = false;
      this.objects[i].is_show_flag = false;
    }

    for (let i = 0; i < this.announces.length; i++) {
      this.announces[i].is_show_votes = false;
      this.announces[i].is_show_price = false;
      this.announces[i].is_show_profile = false;
      this.announces[i].is_show_comments = false;
      this.announces[i].is_show_vote = false;
      this.announces[i].is_show_flag = false;
    }

    if (this.comments && this.comments.length > 0) this.resetCommentsTooltips(this.comments);
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
        if (data && data.posts_load_count) this.posts_load_count += data.posts_load_count;

        if (this.type != 'main') {
          if (data && data.noscroll) this.load(true);
          else this.load();
        }

        if (data && data.noscroll) this.loadAnnounces(true);
        else this.loadAnnounces();

        this.loadInvites();
      });

    this.subscription_comments = headerService.commentChanged$.subscribe(
      data => {
        this.loadComments(true);
      });

    this.event_voted = headerService.voted$.subscribe(
      data => {
        this.current_user_votes[data.id] = data.weight;
      });
  }

  ngAfterViewInit() {
  }

  processComment(o: any) {
    for (let i =0; i < o.length; i++) {
      o[i].displayName = this.postsService.getUserDisplayName(o[i].user);
      o[i].displayNameBlog = this.postsService.getUserDisplayNameBlog(o[i].user);
      o[i].displayNameLogin = this.postsService.getUserLogin(o[i].user);

      if (o[i].comments && o[i].comments.length > 0) this.processComment(o[i].comments);
    }
  }


  loadComments(force: boolean = false) {
    if (this.type !== 'comments') return;

    this.isLoading = true;

    this.postsService.getAllCommentsList({count: this.comments_load_count, full: true})
      .subscribe((data) => {

    		Object.keys(data.articles).forEach((key,index) => {
    	          data.articles[key].displayName = this.postsService.getUserDisplayName(data.articles[key].user);
                data.articles[key].displayNameBlog = this.postsService.getUserDisplayNameBlog(data.articles[key].user);
    		});

        this.processComment(data.list);
        
        if (!force) {
          for (let i = 0; i < this.comments.length; i++) {
            for (let z = 0; z < data.list.length; z++) {
              if (this.comments[i].id == data.list[z].id) {
                data.list[z] = this.comments[i];
              }
            }
          }
        }

        this.comments = data.list;
        this.commentsArticles = data.articles;

        if (data.current_user_votes) this.comments_current_user_votes = data.current_user_votes;
        else this.comments_current_user_votes = {};

        if (this.comments && this.comments.length > 0) this.comments_votes = data.votes;
        else this.comments_votes = {};

        this.postsService.processJWT(data);

        this.isLoading = false;
      });
  }

  ngOnInit() {
    $('body').removeClass('large-editor');
    this.initScroll();

    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    };

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });

    $('#global_category').val('Все рубрики');
    $('#global_category').trigger('change');

    this.routeSubscription = this.route.params.subscribe(
      params => {
        this.return = '';
        if (this.route.snapshot.queryParams['return'] && this.route.snapshot.queryParams['return'].length > 0) this.return = this.route.snapshot.queryParams['return'];

        if (this.route.snapshot.queryParams['isBlogLink']) this.isBlogLink = this.route.snapshot.queryParams['isBlogLink'];
        if (this.route.snapshot.queryParams['isNavLink']) this.isNavLink = this.route.snapshot.queryParams['isNavLink'];
        this.queryParams = this.route.snapshot.queryParams;

        this.content_banned = false;

        $.magnificPopup.close({
          items: {
            src: '#p-page'
          }
        });

        $.magnificPopup.close({
          items: {
            src: '#p-comments'
          }
        });

        this.user = this.postsService.getSession();
        this.userRole = this.postsService.getUserRole();
        this.userId = this.postsService.getUserId();

        this.type = this.route.snapshot.data.type.replace('index', 'main');

        if (this.type != 'popular') this.time = null;

        if (this.type != 'index' && this.type != 'main') $('.header__bottom-right-drop').show();
        else $('.header__bottom-right-drop').hide();

        if (this.route.snapshot.params.tag) {
          this.tag = decodeURI(this.route.snapshot.params.tag);

          $('#global_category').val(this.capitalize(this.tag));
          $('#global_category').trigger('change');
        }

        if (this.type == 'main') this.announces_load_count = 20;

        let globalCategory = $('#global_category').val();
        if (globalCategory && globalCategory.length > 0 && globalCategory != 'Все рубрики') this.tag = globalCategory;

        if (this.route.snapshot.params.id && !isNaN(this.route.snapshot.params.id)) {
          this.postId = this.route.snapshot.params.id;

          if (!this.route.snapshot.params.commentId) {
            setTimeout(() => {
              this.openPost(this.postId);
            }, 300);
          }

          if (this.route.snapshot.params.commentId && !isNaN(this.route.snapshot.params.commentId)) {
            this.commentId = this.route.snapshot.params.commentId;
            this.openComment(this.postId, this.commentId);
          }

        }

        this.loadLeader();

        if (this.type == 'index') this.articleType = 'main';
        if (this.type == 'main') this.articleType = 'main';
        if (this.type == 'feed') this.articleType = 'follow';
        if (this.type == 'new') this.articleType = 'new';
        if (this.type == 'actual') this.articleType = 'actual';
        if (this.type == 'popular') this.articleType = 'popular';
        if (this.type == 'comments') this.articleType = 'comments';

        this.page = '/posts/'+this.type;

        if (this.type != 'main') this.load();
        this.loadAnnounces();
        this.loadComments();
        this.loadNewAuthors();
        this.loadInvites();

        if (this.type == 'comments') {
          $('.header__bottom-right-drop').hide();
        }

        this.queue_interval = setInterval(() => {
          if (this.scroll_direction == 0) return;

          if (this.scroll_direction == 1) {
            this.posts_load_count += 20;
            this.announces_load_count += 20;
            this.comments_load_count += 20;
          }
          if (this.type != 'main') this.announces_load_count = 3;
          // console.log(this.scroll_direction, this.posts_load_count);

          this.scroll_direction = 0;

          if (this.type != 'main' && this.type != 'comments') this.load();
          if (this.type == 'main') this.loadAnnounces();
          if (this.type == 'comments') this.loadComments();

        }, 2000);
      });
  
      this.headerService.setSharpayUrl();
  }

  toggleVotes(o: any, newState: boolean) {
    setTimeout(() => {
      o.is_show_votes = newState;
    }, 50);
  }

  togglePrice(o: any, newState: boolean) {
    setTimeout(() => {
      o.is_show_price = newState;
    }, 50);
  }

  ngOnDestroy() {
    clearInterval(this.queue_interval);
    this.routeSubscription.unsubscribe();

    this.subscription.unsubscribe();
    this.subscription_comments.unsubscribe();
    this.event_voted.unsubscribe();
  }

  openSinglePost(id: number, returnUri: string) {
    this.headerService.openPost(id, returnUri, 0, false, this.queryParams, true);

    return false;
  }

  openPost(id: number) {
    this.paramId = id;
    this.paramIsAnnouncement = false;

    let articleParams = {
      id: +id,
      source_list: {
        list: 'list',
        sort_field: 'time',
        desc_order: false,
      }
    };

/*
    this.postsService.articelsGetOne(articleParams)
      .subscribe((data) => {
        if (data && !data.content || data.content == null) {
          this.content_banned = true;
          return;
        }
*/

        this.initial_uri = window.location.pathname;

        this.headerService.eventPostChanged({id: id, uri: this.initial_uri});

        $.magnificPopup.open({
          items: {
            src: '#p-page'
          },
          disableOn: () => {
            // return this.isDragging;
          },
          //closeOnBgClick: false,
          callbacks: {
            beforeOpen: function() {  this.wrap.removeAttr('tabindex') },
            open: function() {},
            close: () => {
              // return;
              if (this.paramIsAnnouncement) {
                if ($("[announcementlistelement="+this.paramId+"]").length) $('html, body').animate({ scrollTop: $("[announcementlistelement="+this.paramId+"]").offset().top - 200}, 0);
              } else {
                if ($("[postlistelement="+this.paramId+"]").length) $('html, body').animate({ scrollTop: $("[postlistelement="+this.paramId+"]").offset().top - 200}, 0);
              }

              setTimeout(() => {
                if (this.return == '') return;

                if (window.location.pathname !== this.return && window.location.pathname !== '/posts/new' && window.location.pathname !== this.initial_uri) return;

                this.router.navigate([this.return.replace('/main', '/index')]);
              }, 150);
            }
          }
        });
        /*
      });
      */
  }

  capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  openComment(id: number, commentId: number) {
    let returnUri: string = '';
    if (this.route.snapshot.queryParams["returnUri"]) returnUri = this.route.snapshot.queryParams["returnUri"];

    this.headerService.eventOpenComments({id: id, commentId: commentId, returnUri: returnUri});
  }

  initScroll() {
  }

  load(force: boolean = false) {
    this.isLoading = true;

    if (this.type == 'comments') return;

    let params: any = {count: this.posts_load_count, type: this.articleType};

    if (this.articleType == 'popular') params.period = this.time;

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

          //
          if (data.list.length == 0 && params['tags']) this.objects = [];

          if (data.list.length > 0) this.objects = data.list;
          else this.isCanScroll = false;
          //

          if (this.objects.length > 0) this.current_user_votes = data.current_user_votes;
          else this.current_user_votes = {};

          if (this.objects.length > 0) this.votes = data.votes;
          else this.votes = {};

          this.isLoading = false;

          this.headerService.eventList({origin: 'list', type: 'posts', list: this.objects});
        }

        this.postsService.initPostJS();

        this.postsService.processJWT(data);
      });
  }

  loadAnnounces(force: boolean = false) {
    this.isLoading = true;

    let params = {count: this.announces_load_count, type: this.articleType};

    if (this.tag.length > 0) params['tags'] = [this.tag];

    params['page_code'] = this.type;

    this.postsService.getAnnouncesList(params)
      .subscribe((data) => {
        if (data.list) {
          for (let i = 0; i < data.list.length; i++) {
            data.list[i].metadata = JSON.parse(data.list[i].metadata);
            data.list[i].displayName = this.postsService.getUserDisplayName(data.list[i].user);
            data.list[i].displayNameBlog = this.postsService.getUserDisplayNameBlog(data.list[i].user);
          }

          if (!force) {
            for (let i = 0; i < this.announces.length; i++) {
              for (let z = 0; z < data.list.length; z++) {
                if (this.announces[i].id == data.list[z].id) {
                  data.list[z] = this.announces[i];
                }
              }
            }
          }

          if (this.announces.length > 0 && data.list.length > 0 && this.announces[0].id == data.list[0].id) this.isCanScrollAnnouncements = false;

          if (data.list.length == 0 && params['tags']) this.announces = [];

          if (data.list.length > 0) this.announces = data.list;
          else this.isCanScrollAnnouncements = false;

          if (this.announces.length > 0) this.current_user_votes_announces = data.current_user_votes;
          else this.current_user_votes_announces = {};

          this.isLoading = false;

          // this.headerService.eventList({origin: 'list', type: 'announcements', list: this.announces});
        }

        this.postsService.initPostJS();

        this.postsService.processJWT(data);
      });
  }

  loadInvites() {
    let invitesCache = localStorage.getItem('invites');
    if (invitesCache && invitesCache.length > 5) this.invites = JSON.parse(invitesCache);

    let params = {count: 8};

    this.postsService.getInvitesList(params)
      .subscribe((data) => {
        if (data.list) {
          for (let i = 0; i < data.list.length; i++) {
            data.list[i].author.displayName = this.postsService.getUserDisplayName(data.list[i].author);
            data.list[i].author.displayNameBlog = this.postsService.getUserDisplayNameBlog(data.list[i].author);
          }

          if (data.list.length == 0 ) this.invites = [];

          if (data.list.length > 0) this.invites = data.list;

          localStorage.setItem('invites', JSON.stringify(this.invites));
        }

        this.postsService.initPostJS();

        this.postsService.processJWT(data);
      });
  }


  loadLeader() {
    let params = {period: 60 * 60 * 24 * 7, type: 'popular', count: 1};

    this.postsService.articelsGetAll(params)
      .subscribe((data) => {
        if (data.list && data.list.length > 0) {
          if (data.list[0].body) data.list[0].body = data.list[0].body.replace(/<\/?[^>]+(>|$)/g, "");
          if (data.list[0].content && data.list[0].content.body) data.list[0].content.body = data.list[0].content.body.replace(/<\/?[^>]+(>|$)/g, "");

          data.list[0].displayName = this.postsService.getUserDisplayName(data.list[0].user);
          data.list[0].displayNameBlog = this.postsService.getUserDisplayNameBlog(data.list[0].user);

          this.leader = data.list[0];
        }

        this.leader_current_user_votes = data.current_user_votes;
        this.leader_votes = data.votes;


        this.postsService.processJWT(data);
      });
  }

  getUserPower(value, type) {
    return this.postsService.getUserPower(value, type);
  }

  getUserReputation(value) {
    return this.postsService.getUserReputation(value);
  }

  showAnnounceText() {
    $.magnificPopup.open({
      items: {
        src: '#p-announce-button'
      },
      callbacks: {
        open: function() {},
        close: () => {
        }
      }
    });
  }

  showInviteText() {
    $.magnificPopup.open({
      items: {
        src: '#p-invite-button'
      },
      callbacks: {
        open: function() {},
        close: () => {
        }
      }
    });
  }

  loadNewAuthors() {
    if (['index', 'main'].indexOf(this.type) == -1) return;

    this.new_authors = [];

    this.postsService.getUsers({type: 'new', count: 4})
      .subscribe((data) => {
        if (data.list) {
          for (let i = 0; i < data.list.length; i++) {
            data.list[i].displayName = this.postsService.getUserDisplayName(data.list[i]);          
            data.list[i].displayNameBlog = this.postsService.getUserDisplayNameBlog(data.list[i]);
          }

          this.new_authors = data.list;
        }

        this.postsService.processJWT(data);
      });
  }

  getEarnings(o: any, type: number = 0) {
    return this.postsService.getEarnings(o, type);
  }
}
