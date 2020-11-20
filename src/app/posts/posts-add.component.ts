import { Component, OnInit, EventEmitter} from '@angular/core';

import { PostsService } from '../posts/posts.service';

import { ActivatedRoute, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-inline';
import * as MobileEditor from '@ckeditor/ckeditor5-build-inline-mobile';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

declare var jquery: any;
declare var $: any;
declare var window: any;

@Component({
  selector: 'app-posts-add',
  templateUrl: './posts-add.component.html',
  styles: [''],
})
export class PostsAddComponent implements OnInit {
  public Editor = MobileEditor;

  public EditorImage = ClassicEditor;
  public editorImageField;
  public EmptyEditor = ClassicEditor;

  tmobile = {"ru":{"a":"Edit block","b":"Жирный","c":"YouTube","d":"Ссылка не должна быть пустой.","e":"Данная ссылка не поддерживается.","f":"Подчеркнутый","g":"Курсив","h":"Зачеркнутый","i":"Цитата","j":"Виджет изображений","k":"Оригинальный размер изображения","l":"Боковое изображение","m":"Выравнивание по левому краю","n":"Выравнивание по центру","o":"Выравнивание по правому краю","p":"Выбрать заголовок","q":"Заголовок","r":"Ссылка","s":"Подпись к изображению","t":"Нумерованный список","u":"Маркированный список","v":"Вставить видео","w":"Вставить таблицу","x":"Столбец заголовков","y":"Вставить столбец слева","z":"Вставить столбец справа","aa":"Удалить столбец","ab":"Столбец","ac":"Строка заголовков","ad":"Вставить строку ниже","ae":"Вставить строку выше","af":"Удалить строку","ag":"Строка","ah":"Объединить с ячейкой сверху","ai":"Объединить с ячейкой справа","aj":"Объединить с ячейкой снизу","ak":"Объединить с ячейкой слева","al":"Разделить ячейку вертикально","am":"Разделить ячейку горизонтально","an":"Объединить ячейки","ao":"Размер шрифта","ap":"По умолчанию","aq":"Очень мелкий","ar":"Мелкий","as":"Крупный","at":"Очень крупный","au":"Выравнивание по левому краю","av":"Выравнивание по правому краю","aw":"Выравнивание по центру","ax":"Выровнять","ay":"Выравнивание текста","az":"Семейство шрифтов","ba":"Выделение жёлтым маркером","bb":"Выделение зелёным маркером","bc":"Выделение розовым маркером","bd":"Выделение синим маркером","be":"Красный цвет текста","bf":"Зеленый цвет текста","bg":"Убрать выделение","bh":"Выделить","bi":"Редактировать альтернативный текст","bj":"Сохранить","bk":"Отмена","bl":"Ссылка на YouTube","bm":"Альтернативный текст","bn":"Отменить","bo":"Повторить","bp":"Вставьте ссылку на YouTube/vimeo","bq":" ","br":"Убрать ссылку","bs":"Редактировать ссылку","bt":"Открыть ссылку в новой вкладке","bu":"Для этой ссылки не установлен адрес URL","bv":"Ссылка URL","bw":"Параграф","bx":"Заголовок 1","by":"Заголовок 2","bz":"Заголовок 3","ca":"Heading 4","cb":"Heading 5","cc":"Heading 6","cd":"Редактор, %0"}};

  tdesktop = {"ru" : {a:"YouTube",b:"Ссылка не должна быть пустой.",c:"Данная ссылка не поддерживается.",d:"Зачеркнутый",e:"Курсив",f:"Цитата",g:"Жирный",h:"Выбрать заголовок",i:"Заголовок",j:"Ссылка",k:"Нумерованный список",l:"Маркированный список",m:"Подчеркнутый",n:"Выделение жёлтым маркером",o:"Выделение зелёным маркером",p:"Выделение розовым маркером",q:"Выделение синим маркером",r:"Красный цвет текста",s:"Зеленый цвет текста",t:"Убрать выделение",u:"Выделить",v:"Виджет изображений",w:"Вставить видео",x:"Оригинальный размер изображения",y:"Боковое изображение",z:"Выравнивание по левому краю",aa:"Выравнивание по центру",ab:"Выравнивание по правому краю",ac:"Подпись к изображению",ad:"Размер шрифта",ae:"По умолчанию",af:"Очень мелкий",ag:"Мелкий",ah:"Крупный",ai:"Очень крупный",aj:"Вставить таблицу",ak:"Столбец заголовков",al:"Вставить столбец слева",am:"Вставить столбец справа",an:"Удалить столбец",ao:"Столбец",ap:"Строка заголовков",aq:"Вставить строку ниже",ar:"Вставить строку выше",as:"Удалить строку",at:"Строка",au:"Объединить с ячейкой сверху",av:"Объединить с ячейкой справа",aw:"Объединить с ячейкой снизу",ax:"Объединить с ячейкой слева",ay:"Разделить ячейку вертикально",az:"Разделить ячейку горизонтально",ba:"Объединить ячейки",bb:"Семейство шрифтов",bc:"Выравнивание по левому краю",bd:"Выравнивание по правому краю",be:"Выравнивание по центру",bf:"Выровнять",bg:"Выравнивание текста",bh:"Сохранить",bi:"Отмена",bj:"Ссылка на YouTube",bk:"Редактировать альтернативный текст",bl:"Ссылка URL",bm:"Убрать ссылку",bn:"Редактировать ссылку",bo:"Открыть ссылку в новой вкладке",bp:"Для этой ссылки не установлен адрес URL",bq:"Альтернативный текст",br:"Отменить",bs:"Повторить",bt:"Вставьте ссылку на YouTube/vimeo",bu:" ",bv:"Параграф",bw:"Заголовок 1",bx:"Заголовок 2",by:"Заголовок 3",bz:"Heading 4",ca:"Heading 5",cb:"Heading 6",cc:"Редактор, %0"}};

  public onReady( editor ) {
    this.editorImageField = editor;
  }

  isEditorReady: boolean = false;

  selectOptions = {placeholder: 'Выберите рубрику', allowClear: true, multiple: false,};

  audio: any = new Audio('/assets/typewriter.mp3');

  object: any = {
    reward_type: 50,
    content: {
      id: 0,
      title: '',
      body: 'Текст произведения',
      category: '',
      image: '',
      metadata: {
        tags: [],
      },
      tags_input: '',
    },
  };

  isSavingPost: boolean = false;

  postImage = '';

  categories = [];

  isTypewriterEnabled: boolean = false;

  selectedObjects: any = [];
  tagsTypeAhead = new EventEmitter<string>();
  tags: any = [];

  TODO: boolean = false;

  userAuthor: any = {
    ban: false,
  };
  user: any = {
    ban: false,
  };
  userRole: string = '';
  userId: number = 0;
  login: string = '';

  isMobile: boolean = false;

  post_save_interval: any;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
    this.tagsTypeAhead
      .distinctUntilChanged()
      .debounceTime(200)
      .switchMap(term => this.postsService.getAll({dropdown_search: term, status: 2}))
      .subscribe(items => {
        console.log(items);
        this.tags = items.data;
      }, (err) => {
        console.log(err);
        this.tags = [];
      });
  }

  focusPostImageField() {
     this.editorImageField.editing.view.focus();    
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

  editorClicked() {
    this.resizeEditorBar();
    setTimeout(() => {
        this.resizeEditorBar();
        }, 50);
  }

  resizeEditorBar() {
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
        + parseFloat($('.post_form_content_container').css('margin-left'))
      );
    }  
  }

  savePost(id: number) {
    if (this.isSavingPost) return false;

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

    if (!this.object.content.terms) {
      alert('Пожалуйста согласитесь с пользовательским соглашением.');
      return;
    }

    if (this.object.content.title.length > 180) {
      alert('Длинна заголовка ограничена 180 символами.');
      return;
    }

    if (this.object.content.title.length < 1) {
      alert('Пожалуйста введите заголовок.');
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

    this.object.reward_type = +this.object.reward_type;
    if (!this.object.self_vote) this.object.self_vote = false;

    if (!this.object.content.input_mode) this.object.content.metadata.editor = 'html'; else this.object.content.metadata.editor = 'markdown';

    // this.object.content.image = this.object.content.image.toLowerCase();

    this.isSavingPost = true;

    this.postsService.articelsSave(this.object)
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          this.isSavingPost = false;

          alert(data.error);
          return;
        }

        localStorage.setItem('new_post_body', '');
        localStorage.setItem('new_post_title', '');

        localStorage.setItem('post_reward', this.object.reward_type);
        localStorage.setItem('post_agree_tos', '1');

        this.postsService.processJWT(data);

        this.router.navigate(['posts/new']);
      });
  }

  ngOnDestroy() {
    clearInterval(this.post_save_interval);
  }

  ngOnInit() {
    this.isSavingPost = false;

    if (localStorage.getItem('isTypewriterEnabled') && +localStorage.getItem('isTypewriterEnabled') == 1) this.isTypewriterEnabled = true;

    $('body').addClass('large-editor');
    let post_body = localStorage.getItem('new_post_body');
    if (post_body && post_body.length > 0) this.object.content.body = post_body;

    let post_title = localStorage.getItem('new_post_title');
    if (post_title && post_title.length > 0) this.object.content.title = post_title;

    this.post_save_interval = setInterval(() => {
      localStorage.setItem('new_post_body', this.object.content.body);
      localStorage.setItem('new_post_title', this.object.content.title);

    }, 1000);

  	/*
    if (window.innerWidth < 800) {
  	  window.CKEDITOR_TRANSLATIONS = this.tmobile;
      this.isMobile = true;
    }
    else {
      window.CKEDITOR_TRANSLATIONS = this.tdesktop;
      this.isMobile = false;
    }

    if (this.isMobile) this.Editor = MobileEditor;
    else this.Editor = ClassicEditor;
    */

    this.isEditorReady = true;

    $('.header__bottom-right-drop').hide();

    /*
    setTimeout(() => {
    	$('.ck.ck-balloon-panel:eq(3)').css('width', $('.post_form_content_container_sub').width());
		$('.ck.ck-balloon-panel:eq(7)').css('width', $('.post_form_content_container_sub').width());
    }, 300);
    */

    $.magnificPopup.close({
      items: {
        src: '#p-page'
      }
    });

    if (this.route.snapshot.params.id && !isNaN(this.route.snapshot.params.id)) {
      this.object.content.id = this.route.snapshot.params.id;
    }

    /*
    setTimeout(() => {
	    this.resizeEditorBar();
    }, 1000);
    */

    this.getCategories();

    if (this.object.content.id > 0) this.load();
    else {
      let reward = localStorage.getItem('post_reward');
      if (reward && reward.length > 0) this.object.reward_type = reward;

      let agree_tos = localStorage.getItem('post_agree_tos');
      if (agree_tos && agree_tos.length > 0) this.object.content.terms = true;

      let post_input_mode = JSON.parse(localStorage.getItem('post_input_mode'));
      if (post_input_mode) this.object.content.input_mode = post_input_mode;
      else this.object.content.input_mode = false;
    }

    this.user = this.postsService.getSession();
    this.userRole = this.postsService.getUserRole();
    this.userId = this.postsService.getUserId();

    if (this.user && this.user.n) this.login = this.user.n;

    this.loadUser();
  }

  load() {
    this.postsService.articelsGetOne({id: +this.object.content.id})
      .subscribe((data) => {
        data.content.metadata = JSON.parse(data.content.metadata);
        for (let i =0; i < data.content.metadata.tags.length; i++) {
          if (data.content.metadata.tags[i] == 'stihi-io') data.content.metadata.tags.splice(i, 1);
        }

        if (data.content.metadata.tags.length > 0) {
          data.content.category = this.capitalize(data.content.metadata.tags[0]);
          data.content.metadata.tags.splice(0, 1);
        }

        data.content.tags_input = data.content.metadata.tags.join(',');

        this.object = data;

        this.postsService.processJWT(data);
      });
  }

  capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  loadTags() {
    this.postsService.getAll({dropdown_search: null, type: 0})
      .subscribe((data) => {
        this.tags = data.data;
      });
  }

  resetForm() {
    this.object.content.title = '';
    this.object.content.category = '';
    this.object.content.body = '';
    this.object.content.metadata.tags = '';
  }

  getCategories() {
    this.postsService.getCategories()
      .subscribe((data) => {
        for (let i =0; i < data.list.length; i++ ) {
          data.list[i].text = data.list[i].name;
          data.list[i].id = data.list[i].name;
        }

        this.categories = data.list;
      });
  }

  tos() {
    $.magnificPopup.open({
      items: {
        src: '#p-tos'
      }
    })
  }

  loadUser() {
    this.postsService.getUser({name: this.login})
      .subscribe((data) => {
        let user: any = {};

        this.userAuthor = this.postsService.processUserData(user, data.user);
      });
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

    localStorage.setItem('post_input_mode', JSON.stringify(this.object.content.input_mode));

    /*
    setTimeout(() => {
    	$('.ck.ck-balloon-panel:eq(3)').css('width', $('.post_form_content_container_sub').width());
		$('.ck.ck-balloon-panel:eq(7)').css('width', $('.post_form_content_container_sub').width());
    }, 300);
    */
  }

  categoryChanged(e: any): void {
    if (e.data && e.data.length > 0 && e.data[0].selected) {
      this.object.content.category = e.data[0].text;
    }
  }

  toggleTypewriter() {
    this.isTypewriterEnabled = !this.isTypewriterEnabled;

    if (this.isTypewriterEnabled) localStorage.setItem('isTypewriterEnabled', '1');
    else localStorage.setItem('isTypewriterEnabled', '0');
  }

  onCkeditorChange(e: any) {
    if ((e.inputType || e.event.name == "change:data") && this.isTypewriterEnabled) {

    this.audio.volume = 0.5;
		this.audio.pause();
		this.audio.currentTime = 0;
		this.audio.play();      
    }
  }
}
