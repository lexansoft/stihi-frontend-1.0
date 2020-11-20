import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {PostsService} from "../posts/posts.service";
import {HeaderService} from "../shared/services/header.service";

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-posts-announce',
  templateUrl: './posts-announce.component.html',
  styleUrls: []
})
export class PostsAnnounceComponent implements OnInit {
  type: string = '';
  selectedObjects: any = [];

  post: any = {
    title: 'Заголовок',
    author: 'Автор',
    id: 0,
    val_power: 0,
    user: {},
  };

  postId: number = 0;

  announces: any = [];

  user: any = {};

  secret: any = {
    login: '',
    key: '',
  };

  page: string = '';

  userRole: any;
  userId: any;

  TODO: boolean = false;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService,
  ) {}

  ngOnInit() {
    $('.header__bottom-right-drop').hide();

    $.magnificPopup.close({
      items: {
        src: '#p-page'
      }
    });

    this.user = this.postsService.getSession();
    this.userRole = this.postsService.getUserRole();
    this.userId = this.postsService.getUserId();
    if (this.user.n) this.secret.login = this.postsService.getUserLogin(this.postsService.getSession());

    this.loadAnnounces();

    if (this.route.snapshot.params.id && !isNaN(this.route.snapshot.params.id)) {
      this.postId = this.route.snapshot.params.id;
    }

    this.page = '/posts/'+this.postId+'/announce';

    if (this.postId > 0) this.load();

    this.loadUser();
  }

  load() {
    this.postsService.articelsGetOne({id: +this.postId, source_list: {
        list: 'list',
        sort_field: 'time',
        desc_order: false,
      }})
      .subscribe((data) => {
        data.content.metadata = JSON.parse(data.content.metadata);

        data.content.displayName = this.postsService.getUserDisplayName(data.content.user);
        data.content.displayNameBlog = this.postsService.getUserDisplayNameBlog(data.content.user);

        this.post = data.content;

        this.postsService.processJWT(data);
      });
  }

  showAuth() {
    $.magnificPopup.open({
      items: {
        src: '#p-auth'
      },
      //closeOnBgClick: false,
      callbacks: {
        beforeOpen: function() {  this.wrap.removeAttr('tabindex') },
        open: function() {},
        close: () => {}
      }
    });
  }

  loadAnnounces() {
    this.postsService.getAnnouncePageList({id: +this.postId})
      .subscribe((data) => {
        this.announces = data.list;

        this.postsService.processJWT(data);
      });
  }

  auth() {
    if (this.secret.key.length < 5 || this.secret.login.length < 3) {
      alert('Пожалуйста авторизуйтесь');
      return;
    }

    this.save();
  }

  save() {
    if (this.post.id == 0) {
      alert('Пожалуйста выберите произведение.');
      return;
    }

    if (this.type.length < 2) {
      alert('Пожалуйста выберите, где разместить Ваш анонс.');
      return;
    }

    if (this.secret.key.length < 5 || this.secret.login.length < 3) {
      this.showAuth();
      return;
    }

    $.magnificPopup.close();

    this.postsService.createAnnounce({"article_id": this.post.id, "page_code": this.type, "active_key": this.secret.key, "login": this.secret.login})
      .subscribe((data) => {
        // console.log(data);

        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.router.navigate(['/posts/'+this.type.replace('main', 'index')]);
      });
  }

  getUserPower(value, type) {
    return this.postsService.getUserPower(value, type);
  }

  getUserReputation(value) {
    return this.postsService.getUserReputation(value);
  }

  loadUser() {
    this.postsService.getUser({id: +this.postsService.getUserId()})
      .subscribe((data) => {

        this.user = data.user;

        this.postsService.processJWT(data);
      });
  }

  selectAnnounce(o: any) {
    $('.checkbox__input').prop('checked', false);
    $('#checkbox1'+o.code).prop('checked', true);

    this.type = o.code;
  }
}
