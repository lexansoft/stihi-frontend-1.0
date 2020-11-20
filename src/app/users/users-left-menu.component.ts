import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import {PostsService} from "../posts/posts.service";
import { Subscription }   from 'rxjs/Subscription';
import {HeaderService} from "../shared/services/header.service";

@Component({
  selector: 'app-users-left-menu',
  templateUrl: './users-left-menu.component.html',
  styleUrls: []
})
export class UsersLeftMenuComponent implements OnInit {
  @Input() isShowRubrics;
  subscription: Subscription;
  event_post_edited: Subscription;

  routeSubscription: any;
  id: number = 0;
  object: any = {};

  userId: number = 0;
  userRole: string = 'u';

  tags: any = [];
  login: string = '';
  page: string = '';

  TODO: boolean = false;

  isSubscribedToUser: boolean = false;

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
  
    this.event_post_edited = headerService.postEdited$.subscribe(
      data => {
        this.getUserTagsList();
      });
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(
      params => {
        this.login = params['login'];

        this.userRole = this.postsService.getUserRole();
        this.userId = this.postsService.getUserId();

        this.load();
      });
  }

  subscribe() {
    this.postsService.userSubscribe({user_id: this.id})
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.isSubscribedToUser = true;

        this.postsService.refreshUsersSubscriptions(this.userId);

        this.postsService.processJWT(data);
      });
  }

  unSubscribe() {
    this.postsService.userUnsubscribe({user_id: this.id})
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.isSubscribedToUser = false;

        this.postsService.refreshUsersSubscriptions(this.userId);

        this.postsService.processJWT(data);
      });
  }

  load() {
    if (!this.login || this.login.length < 1) return;

    this.postsService.getUser({name: this.login})
      .subscribe((data) => {
        let user: any = {};

        this.id = data.user.id;

        this.object = this.postsService.processUserData(user, data.user);

        let users = JSON.parse(localStorage.getItem('user_subscriptions'));

        if (users && users[this.object.id]) {
          this.isSubscribedToUser = true;
        } else this.isSubscribedToUser = false;

        this.getUserTagsList();
      });
  }

  getUserTagsList() {
    this.postsService.getUserTagsList({id: +this.id})
      .subscribe((data) => {
        this.tags = [];

        this.tags = data.list
      });
  }

  getUserPower(value, type) {
    return this.postsService.getUserPower(value, type);
  }
  
  isRouterLinkActive(RouterLinkValue: string, RouterUrlValue: string): boolean{
	  let isActive: boolean = (encodeURI(RouterLinkValue) === RouterUrlValue);
	  return isActive;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.event_post_edited.unsubscribe(); 
  }  
}
