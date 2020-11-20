import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {PostsService} from "../posts/posts.service";
import { HeaderService } from '../shared/services/header.service';

@Component({
  selector: 'app-users-subscriptions',
  templateUrl: './users-subscriptions.component.html',
  styleUrls: []
})
export class UsersSubscriptionsComponent implements OnInit {
  routeSubscription: any;
  id: number = 0;
  objects: any = [];
  selectedObjects: any = [];
  user_id: number = 0;
  login: string = '';
  user: any = {ban: false,};

  TODO: boolean = false;

  mode: number = 0;
  type: string = 'subscriptions';

  auId: number = 0;

  constructor(
    private postsService: PostsService,
    private headerService: HeaderService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    /*
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    };
    */

    this.routeSubscription = this.route.params.subscribe(
      params => {
        this.login = params['login'];
        this.type =this.route.snapshot.data.type;

        this.auId = this.postsService.getUserId();

        this.loadUser();
      });
  }

  loadUser() {
    this.postsService.getUser({name: this.login})
      .subscribe((data) => {
        let user: any = {};

        this.user = data.user;

        this.id = data.user.id;
        this.user_id = this.id;

        this.load();
      });
  }

  load() {
    let users = [];
    if (localStorage.getItem('user_subscriptions') && localStorage.getItem('user_subscriptions').length > 0) users = JSON.parse(localStorage.getItem('user_subscriptions'));

    if (this.type == 'subscriptions') {
      this.postsService.getUsersSubscriptionsList({'user_id': this.user_id})
        .subscribe((data) => {

          if (data.list) {
            for (let i = 0; i < data.list.length; i++) {
              data.list[i].displayName = this.postsService.getUserDisplayName(data.list[i]);
              data.list[i].displayNameBlog = this.postsService.getUserDisplayNameBlog(data.list[i]);

              if (users[data.list[i].id]) {
                data.list[i].isSubscribedToUser = true;
              } else data.list[i].isSubscribedToUser = false;
            }

            this.objects = data.list;

            // this.headerService.eventSubscriptions({counter: data.list.length});
          }

          this.postsService.initPostJS();

          this.postsService.processJWT(data);
        });
    }

    if (this.type == 'subscribers') {
      this.postsService.getUsersSubscribersList({'user_id': this.user_id})
        .subscribe((data) => {
          if (data.list) {
            for (let i = 0; i < data.list.length; i++) {
              if (users[data.list[i].id]) {
                data.list[i].isSubscribedToUser = true;
              } else data.list[i].isSubscribedToUser = false;
            }

            this.objects = data.list;

            // this.headerService.eventSubscribers({counter: data.list.length});
          }

          this.postsService.initPostJS();

          this.postsService.processJWT(data);
        });
    }

  }

  getUserPower(value, type) {
    return this.postsService.getUserPower(value, type);
  }

  getUserReputation(value) {
    return this.postsService.getUserReputation(value);
  }

  subscribe(o) {
    this.postsService.userSubscribe({user_id: o.id})
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        o.isSubscribedToUser = true;

        this.postsService.refreshUsersSubscriptions(this.auId);

        this.load();

        this.postsService.processJWT(data);
      });
  }

  unSubscribe(o) {
    this.postsService.userUnsubscribe({user_id: o.id})
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        o.isSubscribedToUser = false;

        this.postsService.refreshUsersSubscriptions(this.auId);

        this.load();

        this.postsService.processJWT(data);
      });
  }
}