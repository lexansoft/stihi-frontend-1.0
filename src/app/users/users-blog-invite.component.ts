import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {PostsService} from "../posts/posts.service";
import {HeaderService} from "../shared/services/header.service";

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-users-blog-invite',
  templateUrl: './users-blog-invite.component.html',
  styleUrls: []
})
export class UsersBlogInviteComponent implements OnInit {
  routeSubscription: any;
  id: number = 0;
  object: any = {};
  login: string = '';
  page: string = '';
  mode: number = 0;
  users: any = [];
  filter: string = '';
  user: any = {ban: false,};

  TODO: boolean = false;

  userId: number = 0;
  userRole: string = 'u';

  secret: any = {
    login: '',
    active_key: '',
    author_login: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
    private headerService: HeaderService,
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(
      params => {
        this.login = params['login'];

        this.user = this.postsService.getSession();
        this.userRole = this.postsService.getUserRole();
        this.userId = this.postsService.getUserId();

        this.secret.login = this.postsService.getUserLogin(this.user);

        this.secret.author_login = this.login;

        this.load();
      });
  }

  load() {
    this.postsService.getUser({name: this.login})
      .subscribe((data) => {
        let user: any = {};

        data.displayName = this.postsService.getUserDisplayName(data.user);
        data.displayNameBlog = this.postsService.getUserDisplayNameBlog(data.user);

        this.object = this.postsService.processUserData(user, data.user);
      });
  }

  getUserPower(value, type) {
    return this.postsService.getUserPower(value, type);
  }

  getUserReputation(value) {
    return this.postsService.getUserReputation(value);
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

  auth() {
    if (this.secret.active_key.length < 5 || this.secret.login.length < 3) {
      alert('Пожалуйста авторизуйтесь');
      return;
    }

    this.invite();
  }

  invite() {
    if (this.secret.active_key.length < 5 || this.secret.login.length < 3) {
      this.showAuth();
      return;
    }

    $.magnificPopup.close();

    this.postsService.createInvite(this.secret)
      .subscribe((data) => {
        // console.log(data);

        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.router.navigate(['/']);
      });
  }
}
