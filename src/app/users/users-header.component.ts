import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription }   from 'rxjs/Subscription';

import {PostsService} from "../posts/posts.service";
import {HeaderService} from "../shared/services/header.service";

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-users-header',
  templateUrl: './users-header.component.html',
  styleUrls: []
})
export class UsersHeaderComponent implements OnInit {
  subscription: Subscription;

  routeSubscription: any;
  id: number = 0;
  login: string = '';
  object: any = {
    avatar_image: '/frontend_assets/img/avatar.png',
    background_image: '/frontend_assets/img/banner.jpg',
  };

  userId: number = 0;
  userRole: string = 'u';
  page: string = '';
  userObject: any = {};

  TODO: boolean = false;

  subscriptions_counter: number = 0;
  subscribers_counter: number = 0;

  subscriptionsHeader: Subscription;
  subscribersHeader: Subscription;

  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
    private headerService: HeaderService,
    ) {
    this.subscription = headerService.profileChanged$.subscribe(
      data => {
        this.ngOnInit();
      });
  }

  mobileNavigateUserHeaderToPage() {
    let uri = $('#mobile_navigation_user_header').val();

    setTimeout(() => {
      $('.header__left').click();
    }, 100);

    this.router.navigate([uri]);
  }

  ngOnInit() {
    setTimeout(() => {
      $('#mobile_navigation_user_header').on('select2:select', (e: any) => {
        console.log('hit');
        this.mobileNavigateUserHeaderToPage();
      });
    }, 200);

    this.subscriptionsHeader = this.headerService.subscriptions$.subscribe(
      data => {
        this.subscriptions_counter = data.counter;
      });


    this.routeSubscription = this.route.params.subscribe(
      params => {
        $('.header__bottom-right-drop').hide();

        $.magnificPopup.close({
          items: {
            src: '#p-page'
          }
        });

        this.login = params['login'];

        this.userRole = this.postsService.getUserRole();
        this.userId = this.postsService.getUserId();

        let selectUserHeader = $('.js-example-basic-single-user-header');
        selectUserHeader.select2({
          minimumResultsForSearch: -1
        });

        $(window).on('scroll', function () {
          selectUserHeader.select2('close');
        });

        this.load();
      });
  }

  load() {
    this.postsService.getUser({name: this.login})
      .subscribe((data) => {
        let user: any = {};
        this.id = data.user.id;

        data.user.displayName = this.postsService.getUserDisplayName(data.user);

        this.userObject = data.user;

        this.isLoading = false;

        this.postsService.getUsersSubscriptionsList({'user_id': this.id})
          .subscribe((data) => {
            if (data.list) {
              for (let i = 0; i < data.list.length; i++) {
                //
              }

              this.subscriptions_counter = data.list.length;

              // this.headerService.eventSubscriptions({counter: data.list.length});
            }

            this.postsService.initPostJS();

            this.postsService.processJWT(data);
          });

        this.postsService.getUsersSubscribersList({'user_id': this.id})
          .subscribe((data) => {
            if (data.list) {
              for (let i = 0; i < data.list.length; i++) {
                //
              }

              this.subscribers_counter = data.list.length;

              // this.headerService.eventSubscribers({counter: data.list.length});
            }

            this.postsService.initPostJS();

            this.postsService.processJWT(data);
          });

        data.user.displayName = this.postsService.getUserDisplayName(data.user);        

        this.object = this.postsService.processUserData(user, data.user);
      });
  }

  getUserPower(value, type) {
    return this.postsService.getUserPower(value, type);
  }

  getUserReputation(value) {
    return this.postsService.getUserReputation(value);
  }

  blockUser(o: any) {
    let action = 'unbanUser';
    if (!o.ban) {
      action = 'banUser';
    }

    this.postsService[action]({id: +o.id, description: ''})
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.load();
        alert('Успешно');

        this.postsService.processJWT(data);
      });
  }
}
