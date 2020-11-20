import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {PostsService} from "../posts/posts.service";
import {HeaderService} from "../shared/services/header.service";

@Component({
  selector: 'app-users-settings',
  templateUrl: './users-settings.component.html',
  styleUrls: []
})
export class UsersSettingsComponent implements OnInit {
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

        this.userRole = this.postsService.getUserRole();
        this.userId = this.postsService.getUserId();

        this.load();
        this.loadUsers();
      });
  }

  load() {
    this.postsService.getUser({name: this.login})
      .subscribe((data) => {
        let user: any = {};

        if (this.userRole != 'a' && (this.userId == 0 || this.userId != data.user.id)) this.router.navigate(['/@'+this.login]);

        this.object = this.postsService.processUserData(user, data.user);
      });
  }

  loadUsers() {
    let users = [];
    for (let i =0; i < 14; i++) {
      users.push({
        name: 'user'+i,
      });
    }

    let z = 0;
    for (let i = 0; i < users.length; i++) {
      if (z >= 2) z = 0;

      users[i].column = z;
      z++;
    }

    this.users = users;
  }

  save() {
    if (!this.object.sex) this.object.sex = 'M';
    if (!this.object.biography) this.object.biography = '';
    if (!this.object.web_size) this.object.web_size = '';
    if (!this.object.place) this.object.place = '';
    if (!this.object.nickname) this.object.nickname = '';

    this.postsService.updateUser(this.object)
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        let user = this.postsService.getSession();
        for (let z in this.object) {
          user[z] = this.object[z];
        }

        this.postsService.saveSession(user);

        this.postsService.processJWT(data);

        this.headerService.eventProfileChanged();

        alert('Изменения сохранены.');
      });
  }

  blockUser(o: any) {
    let action = 'unbanUser';
    if (o.status == 1) {
      action = 'banUser';
    }

    this.postsService[action]({id: +o.id, description: ''})
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.loadUsers();

        this.postsService.processJWT(data);
      });
  }

  getUserPower(value, type) {
    return this.postsService.getUserPower(value, type);
  }

  getUserReputation(value) {
    return this.postsService.getUserReputation(value);
  }
}
