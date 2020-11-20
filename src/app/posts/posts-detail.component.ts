import { Component, ElementRef, HostListener, Input, OnInit, ChangeDetectorRef } from '@angular/core';

import {PostsService} from "../posts/posts.service";
import { HeaderService } from '../shared/services/header.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription }   from 'rxjs/Subscription';
import {PostsListComponent} from "./posts-list.component";

import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-inline';
import * as MobileEditor from '@ckeditor/ckeditor5-build-inline-mobile';

declare var jquery:any;
declare var $ :any;
declare var noUiSlider: any;
declare var window: any;

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: []
})
export class PostsDetailComponent {
  public Editor = MobileEditor;
  focusManager: any;

  public EditorImage = ClassicEditor;
  public editorImageField;
  public EmptyEditor = ClassicEditor;

  tmobile = {"ru":{"a":"Edit block","b":"Жирный","c":"YouTube","d":"Ссылка не должна быть пустой.","e":"Данная ссылка не поддерживается.","f":"Подчеркнутый","g":"Курсив","h":"Зачеркнутый","i":"Цитата","j":"Виджет изображений","k":"Оригинальный размер изображения","l":"Боковое изображение","m":"Выравнивание по левому краю","n":"Выравнивание по центру","o":"Выравнивание по правому краю","p":"Выбрать заголовок","q":"Заголовок","r":"Ссылка","s":"Подпись к изображению","t":"Нумерованный список","u":"Маркированный список","v":"Вставить видео","w":"Вставить таблицу","x":"Столбец заголовков","y":"Вставить столбец слева","z":"Вставить столбец справа","aa":"Удалить столбец","ab":"Столбец","ac":"Строка заголовков","ad":"Вставить строку ниже","ae":"Вставить строку выше","af":"Удалить строку","ag":"Строка","ah":"Объединить с ячейкой сверху","ai":"Объединить с ячейкой справа","aj":"Объединить с ячейкой снизу","ak":"Объединить с ячейкой слева","al":"Разделить ячейку вертикально","am":"Разделить ячейку горизонтально","an":"Объединить ячейки","ao":"Размер шрифта","ap":"По умолчанию","aq":"Очень мелкий","ar":"Мелкий","as":"Крупный","at":"Очень крупный","au":"Выравнивание по левому краю","av":"Выравнивание по правому краю","aw":"Выравнивание по центру","ax":"Выровнять","ay":"Выравнивание текста","az":"Семейство шрифтов","ba":"Выделение жёлтым маркером","bb":"Выделение зелёным маркером","bc":"Выделение розовым маркером","bd":"Выделение синим маркером","be":"Красный цвет текста","bf":"Зеленый цвет текста","bg":"Убрать выделение","bh":"Выделить","bi":"Редактировать альтернативный текст","bj":"Сохранить","bk":"Отмена","bl":"Ссылка на YouTube","bm":"Альтернативный текст","bn":"Отменить","bo":"Повторить","bp":"Вставьте ссылку на YouTube/vimeo","bq":" ","br":"Убрать ссылку","bs":"Редактировать ссылку","bt":"Открыть ссылку в новой вкладке","bu":"Для этой ссылки не установлен адрес URL","bv":"Ссылка URL","bw":"Параграф","bx":"Заголовок 1","by":"Заголовок 2","bz":"Заголовок 3","ca":"Heading 4","cb":"Heading 5","cc":"Heading 6","cd":"Редактор, %0"}};

  tdesktop = {"ru" : {a:"YouTube",b:"Ссылка не должна быть пустой.",c:"Данная ссылка не поддерживается.",d:"Зачеркнутый",e:"Курсив",f:"Цитата",g:"Жирный",h:"Выбрать заголовок",i:"Заголовок",j:"Ссылка",k:"Нумерованный список",l:"Маркированный список",m:"Подчеркнутый",n:"Выделение жёлтым маркером",o:"Выделение зелёным маркером",p:"Выделение розовым маркером",q:"Выделение синим маркером",r:"Красный цвет текста",s:"Зеленый цвет текста",t:"Убрать выделение",u:"Выделить",v:"Виджет изображений",w:"Вставить видео",x:"Оригинальный размер изображения",y:"Боковое изображение",z:"Выравнивание по левому краю",aa:"Выравнивание по центру",ab:"Выравнивание по правому краю",ac:"Подпись к изображению",ad:"Размер шрифта",ae:"По умолчанию",af:"Очень мелкий",ag:"Мелкий",ah:"Крупный",ai:"Очень крупный",aj:"Вставить таблицу",ak:"Столбец заголовков",al:"Вставить столбец слева",am:"Вставить столбец справа",an:"Удалить столбец",ao:"Столбец",ap:"Строка заголовков",aq:"Вставить строку ниже",ar:"Вставить строку выше",as:"Удалить строку",at:"Строка",au:"Объединить с ячейкой сверху",av:"Объединить с ячейкой справа",aw:"Объединить с ячейкой снизу",ax:"Объединить с ячейкой слева",ay:"Разделить ячейку вертикально",az:"Разделить ячейку горизонтально",ba:"Объединить ячейки",bb:"Семейство шрифтов",bc:"Выравнивание по левому краю",bd:"Выравнивание по правому краю",be:"Выравнивание по центру",bf:"Выровнять",bg:"Выравнивание текста",bh:"Сохранить",bi:"Отмена",bj:"Ссылка на YouTube",bk:"Редактировать альтернативный текст",bl:"Ссылка URL",bm:"Убрать ссылку",bn:"Редактировать ссылку",bo:"Открыть ссылку в новой вкладке",bp:"Для этой ссылки не установлен адрес URL",bq:"Альтернативный текст",br:"Отменить",bs:"Повторить",bt:"Вставьте ссылку на YouTube/vimeo",bu:" ",bv:"Параграф",bw:"Заголовок 1",bx:"Заголовок 2",by:"Заголовок 3",bz:"Heading 4",ca:"Heading 5",cb:"Heading 6",cc:"Редактор, %0"}};

  public onReady( editor ) {
    this.editorImageField = editor;
    /*
    setTimeout(() => {
      editor.editing.view.focus();
    }, 1000);
    */
  }

  isEditorReady: boolean = false;

  id: number;

  postImage = '';

  routeSubscription: any;
  object: any = {
    metadata: {
      tags: [],
    },
    vote_slider_percentage: 100,
    user: {},
    is_voted: false,
    comment_input_mode: false,
    content: {
      body: '',
    },
  };

  raw_object: any = {};

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

  txt = '';

  focusPostImageField() {
     this.editorImageField.editing.view.focus();    
  }

  percentages = [];
  vote_post_percentage: number = 100;

  auId: number = 0;
  auName: string = '';
  auRole: string = '';
  user: any;

  subscription: Subscription;
  listSubscription: Subscription;

  isCommentsVisible: boolean = false;

  current_user_votes: any = {};
  votes: any = [];

  comments_votes: any = {};

  categories = [];
  tags: any = [];

  is_editing: boolean = false;

  flag_slider_dom: any;
  flag_slider: any;

  TODO: boolean = false;

  vote_slider: any;
  vote_slider_dom: any;
  vote_slider_percentage: number = 0;

  isSubscribedToUser: boolean = false;

  isRouted: boolean = true;

  uri: string = 'list';
  uri_title: string = 'списке';
  sort_field: string = 'time';
  desc_order: boolean = false;
  blog_user_id: number = 0;
  param_blog_user_id: number = 0;
  param_is_announcement: boolean = false;
  param_data_uri: string = '';
  param_category: string = '';
  param_leaderTime: string = '';
  param_leaderTimeText: string = '';

  isBlogLink: boolean = false;
  isNavLink: boolean = false;
  queryParams: any = {};

  listCache: any = {
    list: [],
  };
  prev_id: number = 0;
  next_id: number = 0;
  lastListCnt: number = 0;
  showSharpayTooltip: boolean = false;

  sharpayImage: any = '';
  sharpayShareCnt: number = 0;

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    for (let i = 0; i < event.path.length; i++) {
      if (event.path[i].className && event.path[i].className.length > 0 && event.path[i].className.indexOf("simpleDropdown__container") !== -1) return;
    }

    this.object.is_show_votes = false;
    this.object.is_show_price = false;
    this.object.is_show_profile = false;
    this.object.is_show_comments = false;
    this.object.is_show_profile2 = false;
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
      o[i].is_show_profile2 = false;
      o[i].is_show_flag = false;
      o[i].is_show_vote = false;

      if (o[i].comments && o[i].comments.length > 0) {
        this.resetCommentsTooltips(o[i].comments);
      }
    }
  }

  onResize(event) {
    /*
    $('.ck.ck-balloon-panel:eq(3)').css('width', $('.post_form_content_container_sub').width());
    $('.ck.ck-balloon-panel:eq(7)').css('width', $('.post_form_content_container_sub').width());
    */

    let width = event.target.innerWidth;

    if (this.Editor == ClassicEditor && width < 800) {
      window.CKEDITOR_TRANSLATIONS = this.tmobile;
      this.isMobile = true;
      this.Editor = MobileEditor;
    }
    if (this.Editor == MobileEditor && width >= 800) {
      window.CKEDITOR_TRANSLATIONS = this.tdesktop;
      this.isMobile = false;
      this.Editor = ClassicEditor;
    }

    setTimeout(() => {
      this.resizeEditorBar();
    }, 50);
  }  

  resizeEditorBar() {
    /*
    let editorBarIndex = -1;

    for (let i =0; i < $('.ck-balloon-panel_toolbar_west').length; i++) {
      if ($($('.ck-balloon-panel_toolbar_west')[i]).width() > 300) editorBarIndex = i;
    }

    if (editorBarIndex > -1) {
      $($('.ck-balloon-panel_toolbar_west')[editorBarIndex]).css('margin-left',
        $('.post_form_content_container').position().left -
        parseFloat(
          $($('.ck-balloon-panel_toolbar_west')[editorBarIndex]).position().left + $($('.ck-balloon-panel_toolbar_west')[editorBarIndex]).css('margin-left').replace('px', '')
        )
      );
    }  
    */
  }

  processNav() {

    if (this.isBlogLink) return;

    this.next_id = 0;
    this.prev_id = 0;

    if (this.listCache.list.length == 0) return;

    for (let i=0; i < this.listCache.list.length; i ++) {
      if (this.listCache.list[i].id == this.object.id) {
        if (i > 0) this.next_id = this.listCache.list[i - 1].id;
        if (this.listCache.list[i + 1]) this.prev_id = this.listCache.list[i + 1].id;

        if (!this.listCache.list[i + 3]) {
          if (this.lastListCnt != this.listCache.list.length) {
            this.headerService.eventPostListChanged({posts_load_count: 20});
            this.lastListCnt = this.listCache.list.length;
          }
        }

        return;
      }
    }
  }

  editorClicked() {
    this.resizeEditorBar();
    setTimeout(() => {
        this.resizeEditorBar();
        }, 50);
  }

  editPost() {
    if (!this.object.content) this.object.content = {
      body: '',
    };
    let post_input_mode = JSON.parse(localStorage.getItem('post_input_mode'));
    if (post_input_mode) this.object.content.input_mode = post_input_mode;
    else this.object.content.input_mode = false;

    this.is_editing = true;

    this.loadRaw();
  }

  capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  cancelEditingPost() {
    this.is_editing = false;
  }

  isMobile: boolean = false;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService,
    private meta: Meta,
    private title: Title,
	private ref: ChangeDetectorRef,
  ) {
    this.subscription = headerService.postChanged$.subscribe(
      data => {      
        this.resetPost();

        this.param_leaderTimeText = '';
        this.param_leaderTime = '';

        if (data.leaderTime && data.leaderTime == 60 * 60 * 24 * 7) this.param_leaderTimeText = 'за неделю';
        if (data.leaderTime && data.leaderTime == 60 * 60 * 24 * 7 * 30) this.param_leaderTimeText = 'за месяц';
        if (data.leaderTime && data.leaderTime == 60 * 60 * 24 * 7 * 30 * 12) this.param_leaderTimeText = 'за год';
        if (data.leaderTime && data.leaderTime == 60 * 60 * 24 * 7 * 30 * 12 * 99999) this.param_leaderTimeText = 'за все время';

        this.param_leaderTime = data.leaderTime;

        this.param_category = data.category;
        if (this.param_category) this.param_category = this.param_category.toLowerCase();

        this.id = data.id;
        this.param_blog_user_id = data.blogId;
        this.param_is_announcement = data.isAnnouncement;
        this.param_data_uri = data.uri;
        this.auId = this.postsService.getUserId();
        this.auRole = this.postsService.getUserRole();
        this.lastListCnt = 0;

        if (data.isPostOpenFromList) {
          this.isBlogLink = false;
          this.isNavLink = false;
        }

        this.ngOnInit();

        this.parseUri(data.uri);

        this.cancelEditingPost();
      });

    this.subscription = headerService.commentChanged$.subscribe(
      data => {
        this.loadComments(true);
      });

    this.listSubscription = headerService.list$.subscribe(
      data => {
        this.listCache = data;
        this.processNav();
      });

    this.percentages = [];
    for (let i =0; i < 11; i++) {
      this.percentages.push(10*i);
    }
  }

  parseUri(s: string) {
    let uri = 'list';
    let sort_field = 'time';
    let uri_title = 'списке';
    let desc_order: boolean = false;
    let blog_user_id: number = 0;

    if (this.auId > 0) {
      uri = 'follow';
      sort_field = 'time';
      desc_order = false;
      blog_user_id = this.auId;

      uri_title = 'ленте';            	
    } 

    if (s.indexOf('/posts/feed') > -1) {
      uri = 'follow';
      sort_field = 'time';
      desc_order = false;
      blog_user_id = this.auId;

      uri_title = 'ленте';
    }

    if (s.indexOf('/posts/new') > -1) {
      uri = 'list';
      sort_field = 'time';
      desc_order = false;
      blog_user_id = 0;

      uri_title = 'новом';
    }

    if (s.indexOf('/posts/actual') > -1) {
      uri = 'list';
      sort_field = 'last_comment_time';
      desc_order = false;
      blog_user_id = 0;

      uri_title = 'актуальном';
    }

    if (s.indexOf('/posts/popular') > -1) {
      uri = 'list';
      sort_field = 'val_gold';
      desc_order = false;
      blog_user_id = 0;

      uri_title = 'лидерах';
    }

    if (s.indexOf('/posts/comments') > -1) {
      uri = 'list';
      sort_field = 'time';
      desc_order = false;
      blog_user_id = 0;

      uri_title = 'комментариях';
    }

    if (s.indexOf('/@') > -1) {
      uri = 'blog';
      sort_field = 'time';
      desc_order = false;
      blog_user_id = this.param_blog_user_id;

      uri_title = 'блоге';
    }

    this.uri = uri;
    this.uri_title = uri_title;
    this.sort_field = sort_field;
    this.desc_order = desc_order;
    this.blog_user_id = blog_user_id;
  }

  resetPost() {
    this.object = {
      metadata: {
        tags: [],
      },
      title: '  ',
      body: '  ',
      vote_slider_percentage: 100,
      user: {},
      is_voted: false,
      comment_input_mode: false,
    };

    this.isCommentsVisible = false;
  }

  getEarnings(o: any, type: number = 0) {
  	let earnings = this.postsService.getEarnings(o, type);
  	if (isNaN(earnings)) earnings = 0;

    return earnings;
  }

  toggleFlag(o: any, newState: boolean) {
    setTimeout(() => {
      o.is_show_flag = false;

      o.is_show_flag = newState;

      if (this.flag_slider_dom) {
        this.flag_slider_dom.noUiSlider.destroy();
        this.flag_slider_dom = null;
        this.flag_slider = null;
      }

      if (newState) {
        if (this.flag_slider) return;

        this.flag_slider_dom = document.querySelectorAll('#ui_slider_post_flag')[0];

        if (!o.slider_percentage) o.slider_percentage = 90;

        this.flag_slider = noUiSlider.create(this.flag_slider_dom, {
          start: o.slider_percentage,
          connect: "lower",
          range: {
            min: 0,
            max: 100
          }
        }, true);

        this.flag_slider.on('update', (values, handle, unencoded, isTap, positions) => {
          o.slider_percentage = Math.round(positions[handle]);
        });
      }

    }, 50);
  }

  toggleVote(o: any, newState: boolean) {
    if (this.object.is_voted) {
      setTimeout(() => {
        $('.p-confirm-slider-post:first').modal({
          closeText: '',     // Text content for the close <a> tag.
          closeClass: '',         // Add additional class(es) to the close <a> tag.
          showClose: false,        // Shows a (X) icon/link in the top-right corner
          modalClass: "modal",    // CSS class added to the element being displayed in the modal.
          showSpinner: false,      // Enable/disable the default spinner during AJAX requests.
          fadeDuration: null,     // Number of milliseconds the fade transition takes (null means no transition)
          fadeDelay: 1.0          // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
        });
        $('.p-confirm-slider-post:first').on($.modal.AFTER_CLOSE, function(event, modal) {
          setTimeout(() => {
            $('.p-confirm-slider-post:first').hide();
          }, 200);
        });
      }, 200);

      return false;
    }

    this.showVote(o, newState);
  }

  cancelVote(o: any) {
    this.saveVote(o.id, 0, true);

    $.modal.close();
  }

  showVote(o: any, newState: boolean) {
    setTimeout(() => {
      o.is_show_vote = newState;

      if (this.vote_slider_dom) {
        this.vote_slider_dom.noUiSlider.destroy();
        this.vote_slider_dom = null;
        this.vote_slider = null;
      }

      let el = document.querySelectorAll('#ui_slider_post_detail')[0];
      if ('noUiSlider' in el) {
        this.vote_slider_dom = document.querySelectorAll('#ui_slider_post_detail')[0];

        this.vote_slider_dom.noUiSlider.destroy();
        this.vote_slider_dom = null;
        this.vote_slider = null;
      }

      if (newState) {
        if (this.vote_slider) return;

        this.vote_slider_dom = document.querySelectorAll('#ui_slider_post_detail')[0];

        if (!this.object.vote_slider_percentage || this.object.vote_slider_percentage < 1) {
          this.object.vote_slider_percentage = 100;
          let percentage: number = parseInt(localStorage.getItem('last_vote_percentage_post'));
          if (percentage > 0) this.object.vote_slider_percentage = percentage;
        }

        this.vote_slider = noUiSlider.create(this.vote_slider_dom, {
          start: this.object.vote_slider_percentage,
          connect: "lower",
          range: {
            min: 0,
            max: 100
          }
        });

        this.vote_slider.on('update', (values, handle, unencoded, isTap, positions) => {
          this.object.vote_slider_percentage = Math.round(positions[handle]);
        });
      }
    }, 50);
  }

  toggleVotes(o: any, newState: boolean) {
    if (o.votes_count == 0) return;

    setTimeout(() => {
      o.is_show_price = false;

      o.is_show_votes = newState;
    }, 50);
  }

  toggleProfile(o: any, newState: boolean) {
    setTimeout(() => {
      o.is_show_profile = false;

      o.is_show_profile = newState;
    }, 50);
  }

  toggleProfile2(o: any, newState: boolean) {
    setTimeout(() => {
      o.is_show_profile2 = false;

      o.is_show_profile2 = newState;
    }, 50);
  }

  togglePrice(o: any, newState: boolean) {
    setTimeout(() => {
      o.is_show_votes = false;

      o.is_show_price = newState;
    }, 50);
  }

  ngOnInit() {
    if (isNaN(this.id)) return;

    $('body').removeClass('large-editor');
    
    this.isEditorReady = true;

    if (this.object.user && this.object.user.avatar) this.object.user.avatar = '/frontend_assets_stihi/img/avatar_default.png';

    this.user = this.postsService.getSession();
    if (this.user && this.user.n) this.auName = this.user.n;

    /*
    setTimeout(() => {
      $('.ck.ck-balloon-panel:eq(3)').css('width', $('.post_form_content_container_sub').width());
      $('.ck.ck-balloon-panel:eq(7)').css('width', $('.post_form_content_container_sub').width());
    }, 300);
    */

    this.load();
    this.getCategories();
  
    this.headerService.setSharpayUrl();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.listSubscription.unsubscribe();
  }

  toggleNewComment(o: any) {
    o.is_comment_form_visible = !o.is_comment_form_visible;

    /*

    if (o.is_comment_form_visible) {
      setTimeout(() => {
        $('.mfp-wrap').animate({
            scrollTop: $('.item3').height() + 50
        }, 0);
      }, 50);
    }
    */
  }

  saveComment(o: any) {
    if (this.object.is_sending) return;

    this.object.is_sending = true;

    this.comment.content.body = o.comment_body;
    this.comment.content.author = this.postsService.getSession().n;
    this.comment.content.parent_author = this.object.author;
    this.comment.content.parent_permlink = this.object.parent_permlink;
    this.comment.content.parent_id = this.object.id;

    if (!this.comment.content.metadata) this.comment.content.metadata = {};
    if (o.comment_input_mode) this.comment.content.metadata.editor = 'html'; else this.comment.content.metadata.editor = 'markdown';

    this.postsService.articelsSaveComment(this.comment)
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {

          delete o.is_sending;

          alert(data.error);
          return;
        }

        this.load();

        this.cancelComment(this.object);

        this.postsService.processJWT(data);
      });
  }

  deleteContent() {
    if (!confirm("Удалить?")) return;

    this.postsService.deleteContent({id: this.object.id})
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.router.navigate(['/posts/new']);

        this.postsService.processJWT(data);
      });
  }

  banContent() {
    if (!confirm("Заблокировать?")) return;

    this.postsService.banContent({id: this.object.id})
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.router.navigate(['/posts/new']);

        this.postsService.processJWT(data);
      });
  }

  subscribe() {
    this.postsService.userSubscribe({user_id: this.object.user.id})
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.isSubscribedToUser = true;

        this.postsService.refreshUsersSubscriptions(this.auId);

        this.postsService.processJWT(data);
      });
  }

  unSubscribe() {
    this.postsService.userUnsubscribe({user_id: this.object.user.id})
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.isSubscribedToUser = false;

        this.postsService.refreshUsersSubscriptions(this.auId);

        this.postsService.processJWT(data);
      });
  }

  cancelComment(o: any) {
    delete this.object.is_sending;

    o.is_comment_form_visible = false;
    o.comment_body = '';
    o.comment_title = '';
  }

  saveFlag(o: any) {
    this.saveVote(o.id, o.slider_percentage, false);
    o.is_show_flag = false;
  }

  saveVote(id: number, percentage: number, direction: boolean) {
    let tmp = {
      vote: {
        content_id: id,
        weight: percentage * 100,
      }
    };

    localStorage.setItem('last_vote_percentage_post', String(percentage));

    if (!direction) tmp.vote.weight = tmp.vote.weight * -1;

    this.postsService.voteSave(tmp)
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.object.is_show_vote = false;

        this.load();

        let voteData = {id: tmp.vote.content_id, weight: tmp.vote.weight};

        this.headerService.eventVoted(voteData);

        this.postsService.processJWT(data);
      });
  }

  load() {  	  
    this.object.is_saving = false;

    this.sharpayImage = '';
    this.sharpayShareCnt = 0;

    let articleParams = {
      id: +this.id,
      source_list: {
        list: this.uri,
        sort_field: this.sort_field,
        desc_order: this.desc_order,
      }
    };

    if (this.blog_user_id > 0) articleParams.source_list['user_id'] = this.blog_user_id;
    if (this.param_blog_user_id > 0) articleParams.source_list['user_id'] = this.param_blog_user_id;

    if (articleParams.source_list['list'] == 'blog' && (!articleParams.source_list['user_id'] || articleParams.source_list['user_id'] < 1)) articleParams.source_list['user_id'] = 4;
    let z = true;

    this.postsService.articelsGetOne(articleParams)
      .subscribe((data) => {
      	this.object.title = data.content.title;
		    this.ref.detectChanges();

        data.content.metadata = JSON.parse(data.content.metadata);
        data.content.displayName = this.postsService.getUserDisplayName(data.content.user);
        data.content.displayNameBlog = this.postsService.getUserDisplayNameBlog(data.content.user);
        data.content.displayNameLogin = this.postsService.getUserLogin(data.content.user);

        if (!data.content.editor || data.content.editor == '') data.content.editor = 'markdown';

        if (data.content.editor != 'markdown') {
          data.content.body = data.content.body.replace(/(?:\r\n|\r|\n)/g, '');
          data.content.input_mode = false;
        } else {
          data.content.input_mode = true;
        }

        data.content.body = this.headerService.preProcessBody(data.content.body, data.content.editor);

        data.is_voted = false;

        data.content.comment_input_mode = false;

        this.object = data.content;
        this.object.comment_body = '';

        this.object.content = {
          body: '',
        };

        if (this.object.image.length > 5) {
           this.postImage = '<img src="'+this.object.image+'"></img>';
        }

        this.share.subject = this.object.title + ' - stihi.io';
        this.share.body = 'https://stihi.io/posts/' + this.object.id;
        this.share.url = 'https://stihi.io/posts/' + this.object.id;

        let users = JSON.parse(localStorage.getItem('user_subscriptions'));

        if (users && users[this.object.user.id]) {
          this.isSubscribedToUser = true;
        } else this.isSubscribedToUser = false;

        this.processNav();

        if (this.object.image && this.object.image.length > 4) this.sharpayImage = this.object.image;

        if (this.sharpayImage.length == 0) {
          let re = /(https?:\/\/.*\.(?:png|jpg|gif|svg|bmp|jpeg))/ig;
          let results: any = [];
          let m: any = null;

          do {
              m = re.exec(this.object.body);
              if (m) {
                  if (results.indexOf(m[0]) == -1) results.push(m[0]);
              }
          } while (m);

          if (results.length > 0) this.sharpayImage = results[0];        
        }

        this.postsService.getSharpayShareCount({"url": window.location.href})
        .subscribe((data) => {
          if (data && data.result && !isNaN(data.result)) this.sharpayShareCnt = data.result;
        });

        this.postsService.processJWT(data);

        this.loadVotes();

      });

    this.loadComments();
  }

  openSharpay() {
    let src = 'https://app.sharpay.io/share?s=fd422&u='+window.location.href+'&i='+$('.sharpay_widget_custom').attr('data-image')+'&btn=custom';

    window.open(src,"sharpay","toolbar=no,scrollbars=no,width=800,height=500")
  }

  loadRaw() {
    this.object.is_saving = false;

    let articleParams = {
      id: +this.id,
      raw: true,
      source_list: {
        list: 'list',
        sort_field: 'last_comment_time',
        desc_order: false,
      }
    };

    if (this.param_blog_user_id > 0) articleParams.source_list['user_id'] = this.param_blog_user_id;

    this.postsService.articelsGetOne(articleParams)
      .subscribe((data) => {
        data.content.metadata = JSON.parse(data.content.metadata);

        if (!data.content.editor || data.content.editor == '') data.content.editor = 'markdown';

        if (data.content.editor != 'markdown') {
          data.content.body = data.content.body.replace(/(?:\r\n|\r|\n)/g, '');
          data.content.input_mode = false;
        } else {
          data.content.input_mode = true;
        }

        data.content.body = this.headerService.preProcessBody(data.content.body, data.content.editor);

        data.is_voted = false;

        data.content.comment_input_mode = false;

        this.raw_object = data.content;

        //

        this.object.content = Object.assign({}, this.raw_object);

        this.object.content.tags_input = '';
        this.object.content.category = '';
        if (this.object.metadata.tags.length > 1) {
        	this.object.content.category = '';

        	for (let z =0; z < this.categories.length; z++) {
        		if (this.object.content.category == ''
        		&& this.categories[z].name.toLowerCase().replace(/[^А-Яа-я']/g,'') == this.object.metadata.tags[1].toLowerCase().replace(/[^А-Яа-я']/g,'')) this.object.content.category = this.categories[z].name;
        	}
        }

        for (let i=0; i < this.object.metadata.tags.length; i++) {
          if (i > 1) {
            if (this.object.content.tags_input.length > 0) this.object.content.tags_input += ',';
            this.object.content.tags_input += this.object.metadata.tags[i];
          }
        }

        let post_input_mode = JSON.parse(localStorage.getItem('post_input_mode'));
        if (post_input_mode) this.object.content.input_mode = post_input_mode;
        else this.object.content.input_mode = false;

        this.postsService.processJWT(data);

		setTimeout(function(){
			$('[name="object_title"]').height(20);$('[name="object_title"]').height($('[name="object_title"]').prop('scrollHeight'));		
		}, 200);
      });
  }

  sortByTime(a: any, b: any) {
    if (new Date(a.time) > new Date(b.time))
      return -1;
    if (new Date(a.time) < new Date(b.time))
      return 1;
    return 0;
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
    if (!this.id) return;

    this.postsService.articelsGetComments({parent_id: +this.id, full: true})
      .subscribe((data) => {

        if(data.list) data.list.sort(this.sortByTime);

        this.processComment(data.list);

        if (!force && this.comments) {
          for (let i = 0; i < this.comments.length; i++) {
            for (let z = 0; z < data.list.length; z++) {
              if (this.comments[i].id == data.list[z].id) {
                data.list[z] = this.comments[i];
              }
            }
          }
        }

        this.comments = data.list;

        if (data.current_user_votes) this.current_user_votes = data.current_user_votes;
        else this.current_user_votes = {};

        if (data.votes) this.comments_votes = data.votes;
        else this.comments_votes = {};

        this.postsService.processJWT(data);
      });
  }

  getCategories() {
    this.postsService.getCategories()
      .subscribe((data) => {
        this.categories = data.list;
      });
  }

  loadVotes() {
    this.postsService.getVotesList({id: +this.id})
      .subscribe((data) => {
        this.votes = [];

        if (!data.list) return;

        this.votes = data.list;

        for (let i =0; i < data.list.length; i++) {
          if (data.list[i].voter_id == this.auId) this.object.is_voted = true;
        }

        this.postsService.processJWT(data);
      });
  }

  getUserPower(value, type) {
    return this.postsService.getUserPower(value, type);
  }

  getUserReputation(value) {
    return this.postsService.getUserReputation(value);
  }

  savePost(id: number) {
    if (this.postImage.length > 0) {
      let newImageUrl = this.postImage.split('src="');
      if (newImageUrl.length > 1) {
        newImageUrl = newImageUrl[1].split('">');

        if (newImageUrl.length > 1) {
          this.object.content.image = newImageUrl[0];
        }
      }

      if (this.object.content.image.length < 5) {
        alert('Пожалуйста укажите корректную ссылку на изображение');

        return;
      }
    }

    this.object.is_saving = true;

    if (this.object.content.title.length > 180) {
      alert('Длинна заголовка ограничена 180 символами.');
      return;
    }

    this.object.content.metadata.tags = ['stihi-io'];
    if (this.object.content.category.length > 0) this.object.content.metadata.tags.push(this.object.content.category);
    else {
      alert ('Пожалуйста выберите рубрику');
      return;
    }

    let tmp = this.object.content.tags_input.split(',');
    for (let i =0; i < tmp.length; i++) this.object.content.metadata.tags.push(tmp[i].trim());

    this.object.content_id = +this.object.id;
    if (!this.object.content.image) this.object.content.image = '';

    if (!this.object.content.input_mode) this.object.content.metadata.editor = 'html'; else this.object.content.metadata.editor = 'markdown';

    this.postsService.updateArticle(this.object)
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.postsService.processJWT(data);

        this.headerService.eventPostEdited({id: this.object.id});        

        this.headerService.eventPostListChanged({noscroll: true});

        setTimeout(() => {
          this.object.is_saving = false;
          this.load();
          this.cancelEditingPost();
        }, 2000);
      });
  }

  openSinglePost(id: number, queryParams: any) {
    if (queryParams['isNavLink']) this.isNavLink = true;
    if (queryParams['isBlogLink']) this.isBlogLink = true; else this.isBlogLink = false;

    this.headerService.openPost(id, this.param_data_uri, this.param_blog_user_id, this.param_is_announcement, queryParams, false);

    return false;
  }

  switchMode() {
    this.object.content.input_mode = !this.object.content.input_mode;

    if (this.object.content.input_mode) {
      this.object.content.body = this.object.content.body.split('<br />').join('').split('<br>').join('');
    }

    if (!this.object.content.input_mode) {
      this.object.content.body = this.object.content.body.split('<br />\n').join('<br />').split('<br>\n').join('<br />');
      this.object.content.body = this.object.content.body.split('\n').join('<br />');
    }

    /*
    setTimeout(() => {
      $('.ck.ck-balloon-panel:eq(3)').css('width', $('.post_form_content_container_sub').width());
      $('.ck.ck-balloon-panel:eq(7)').css('width', $('.post_form_content_container_sub').width());
    }, 300);
    */
  }
}
