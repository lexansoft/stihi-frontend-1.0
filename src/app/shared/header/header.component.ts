import { Component, OnInit, OnDestroy } from '@angular/core';
import {Location} from '@angular/common';

import { Subscription }   from 'rxjs/Subscription';

import { HeaderService } from '../services/header.service';

import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import {PostsService} from "../../posts/posts.service";

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  searchQuery: string = '';

  user_title: string = '';
  unread_messages: any = [];
  user: any = {};
  login: string = '';
  userId: number = 0;
  userRole: string = 'u';
  categories = [];

  id: number = 0;
  object: any = [];
  mode: number = 0;
  password: string = '';
  password_confirm: string = '';

  captcha_id: number = 0;
  captcha_input: string = '';

  step: number = 0;

  isSignupCodeConfirmed: boolean = false;

  disabledReg: boolean = false;

  TODO: boolean = false;

  currentRoute: string = '';

  isRegChoice: boolean = false;

  constructor(
    private headerService: HeaderService,
    private postsService: PostsService,
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    $(window).scroll(function() {
    $('.ck-toolbar-container').removeClass('ck-balloon-panel_visible');
    });

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let uri = event.url;

        if (uri.indexOf('/posts/new') > -1) uri = '/posts/new';
        if (uri.indexOf('/posts/actual') > -1) uri = '/posts/actual';
        if (uri.indexOf('/posts/popular') > -1) uri = '/posts/popular';
        if (uri.indexOf('/posts/comments') > -1) uri = '/posts/comments';

        $('#mobile_navigation').val(uri);
        $('#mobile_navigation').trigger('change');

        setTimeout(() => {
          $('#mobile_navigation_user_header').val(uri);
          $('#mobile_navigation_user_header').trigger('change');
        }, 700);
      }
    });

    setTimeout(() => {
      $('#global_category').on('select2:select', (e: any) => {
        this.selectCategory();
      });
    }, 200);

    setTimeout(() => {
      $('#mobile_navigation').on('select2:select', (e: any) => {
        this.mobileNavigateToPage();
      });
    }, 200);

    setInterval(() => {
      if (this.userId > 0) {
        this.postsService.refreshUsersSubscriptions(this.userId);

        this.getBattery();
      }

    }, (20*1000));

    /*
    setInterval(() => {
      this.postsService.getExchangeRates({})
        .subscribe((data) => {

          if (data.error && data.error.length > 0) {
            return;
          }

          localStorage.setItem('exchange_rates', JSON.stringify(data));

        });
    }, (10*60*1000));
    */

    this.subscription = headerService.profileChanged$.subscribe(
      data => {
        this.ngOnInit();
      });

    $(document).on('click', 'a', (e) => {

		var element  = $(e.currentTarget);
		let elementClass = '';
		let elementHref = '';

		if (element.attr) {
		  if (element.attr('class')) elementClass = element.attr('class');
		  if (element.prop('href')) elementHref = element.prop('href');        
		} else {
		  elementClass = element.className;
		  elementHref = element.href;          
		}

		if (window.location.href.indexOf('external_link_warning') == -1 && elementHref.indexOf('stihi.io') == -1 && elementHref.indexOf(':8080') == -1 && elementHref.indexOf('javascript:') == -1 && elementHref.length > 2 && elementClass.indexOf('ck-link_selected') == -1 && elementClass.indexOf('k-link-actions__preview') == -1) {
			e.preventDefault();

		    this.router.navigate(['/external_link_warning'], { queryParams: { returnLink: window.location.pathname, targetLink: elementHref} });

			return false;
		}
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    /*
    let src = 'https://app.sharpay.io/api/script.js';
    $('script[src$="' + src + '"]').remove();
    $('<script/>').attr('src', src).appendTo('body');
    */

    this.user = this.postsService.getSession();
    this.userRole = this.postsService.getUserRole();
    this.userId = this.postsService.getUserId();
    if (this.user) this.login = this.postsService.getUserLogin(this.postsService.getSession());

    this.getCategories();
    this.getCaptcha();

    if (this.userId > 0) {
      this.getBattery();
    }
  }

  search() {
    if (this.searchQuery.length == 0) {
      alert('Пожалуйста введите поисковый запрос.');
      return;
    }

    this.router.navigate(['/search/' + this.searchQuery]);
  }

  mobileNavigateToPage() {
    let uri = $('#mobile_navigation').val();

    this.currentRoute = uri;

    if (uri == '/outbound/news') {
      window.open('https://stihi.io/@stihi-io', '_blank');
      return;
    }

    setTimeout(() => {
      $('.header__left').click();
    }, 100);

    this.router.navigate([uri]);
  }

  logOut() {
    this.user = {};
    this.userId = 0;
    this.userRole = 'u';

    localStorage.removeItem('user');

    this.router.navigate(['/']);

    setTimeout(() => {
      window.location.reload();    
    }, 300);
  }

  confirmCode() {
    if ((!this.captcha_input || this.captcha_input.length < 2)) {
      alert ('Пожалуйста введите капчу.');
      return;
    }

    this.postsService.newPassword()
      .subscribe((data) => {
        this.isSignupCodeConfirmed = true;
        this.password = data.password;
      });
  }

  auth() {

    if (!this.object.name || this.object.name.length < 2) {
      alert ('Пожалуйста введите имя.');
      return;
    }

    if (this.mode == 1) {
      if (!this.isSignupCodeConfirmed) return;

      if (this.password != this.password_confirm)  {
        alert ('Пожалуйста введите сгенерированный пароль.');
        return;
      }

      if (!this.object.is_saved)  {
        alert ('Пожалуйста подтвердите что надежно сохранили пароль.');
        return;
      }

      if (!this.object.is_agree_cant_recover)  {
        alert ('Пожалуйста подтвердите что ознакомились с невозможностью восстановления пароля.');
        return;
      }


      if (!this.object.is_agree_tos) {
        alert ('Пожалуйста подтвердите что согласны с правилами использования.');
        return;
      }

      if (!this.object.nickname || this.object.nickname.length < 2) {
        alert ('Пожалуйста введите псевдоним.');
        return;
      }

      this.postsService.golosSignup({"name": this.object.name, "nickname": this.object.nickname, "email": this.object.email, captcha_id: this.captcha_id, captcha_resolve: this.captcha_input, "password": this.password_confirm})
        .subscribe((data) => {
          // console.log(data);

          if (data.error && data.error.length > 0) {
            this.getCaptcha();

            alert(data.error);
            return;
          }

          if (data && data.password && data.password.length > 5) {
            this.password = data.password;

            this.object.password = this.password;

            this.mode = 0;

            this.auth();
          }

        });
    }

    if (this.mode == 0) {
      if (!this.object.password || this.object.password.length < 2) {
        alert ('Пожалуйста введите пароль.');
        return;
      }

      this.postsService.golosSignin({"name": this.object.name, "password": this.object.password})
        .subscribe((data) => {
          // console.log(data);

          if (data.error && data.error.length > 0) {
            alert(data.error);
            return;
          }

          if (!data.token || data.token.length < 10) {
            alert('Ошибка авторизации. Пожалуйста повторите позже.');
            return;
          }

          $.magnificPopup.close();

          this.postsService.processJWT(data);

          this.headerService.eventProfileChanged();

          // avatar
          let base64Url = data.token.split('.')[1];
          let base64 = base64Url.replace('-', '+').replace('_', '/');
          let parsedToken = JSON.parse(window.atob(base64));

          this.postsService.getUser({id: +parsedToken.sub})
            .subscribe((data) => {
              let user = this.postsService.getSession();

              user = this.postsService.processUserData(user, data.user);

              this.postsService.getUserBattery()
                .subscribe((data) => {
                  this.postsService.processJWT(data);

                  user.battery = data.value;
                  user.battery_value = user.battery;
                  if (user.battery_value > 100) user.battery_value = 100;

                  this.postsService.saveSession(user);

                  this.router.navigate(['/@'+this.postsService.getUserLogin(user)]);

                  setTimeout(() => {
                    window.location.reload();                  
                  }, 300);
                });

              this.postsService.processJWT(data);
            });
        });
    }
  }

  getBattery() {
    this.postsService.getUser({id: +(this.userId)})
      .subscribe((data) => {
        let user = this.postsService.getSession();

        user = this.postsService.processUserData(user, data.user);

        this.postsService.getUserBattery()
          .subscribe((data) => {
            this.postsService.processJWT(data);

            user.battery = data.value;
            user.battery_value = user.battery;
            if (user.battery_value > 100) user.battery_value = 100;

            this.postsService.saveSession(user);

            this.user = this.postsService.getSession();
            this.userRole = this.postsService.getUserRole();
            this.userId = this.postsService.getUserId();
          });

        this.postsService.processJWT(data);
      });
  }

  changePassword() {
    window.open('https://golos.io/change_password', '_blank');
  }

  getCategories() {
    this.postsService.getCategories()
      .subscribe((data) => {
        this.categories = data.list;

        localStorage.setItem('rubrics', JSON.stringify(this.categories));
      });
  }

  openSignup() {
    this.isRegChoice = true;
    this.disabledReg = false;
    this.mode = 1;

    $.magnificPopup.open({
        items: {
            src: '#p-reg',
        },
        closeOnContentClick : false, 
        closeOnBgClick :false, 

    });
  }

  getCaptcha() {
    this.postsService.getCaptcha()
      .subscribe((data) => {
        this.captcha_id = data.captcha_id;
      });
  }

  about() {
    $.magnificPopup.open({
      items: {
        src: '#p-about'
      }
    })
  }

  tos() {
    $.magnificPopup.open({
      items: {
        src: '#p-tos'
      }
    })
  }

  privacy() {
    $.magnificPopup.open({
      items: {
        src: '#p-privacy'
      }
    })
  }

  selectCategory() {
    let name = $('#global_category').val();

    let path = (window.location.pathname.split('?return'))[0].split('posts/');
    let type = path[1].split('/');

    let title = 'new';
    if (type.length > 0 && isNaN(+type)) title = type[0];

    setTimeout(() => {
      $('.header__left').click();
    }, 100);

    if (name != 'Все рубрики') this.router.navigate(['/posts/'+title+'/' + name]);
    else this.router.navigate(['/posts/'+title]);
  }

  authForm() {
    this.mode = 0;

    setTimeout(() => {
    $.magnificPopup.open({
      items: {
        src: '#p-log'
      }
    });    }, 100);

  }
}
