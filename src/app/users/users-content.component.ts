import { Component, OnInit } from '@angular/core';

import { PostsService } from '../posts/posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-content',
  templateUrl: './users-content.component.html',
  styleUrls: []
})
export class UsersContentComponent implements OnInit {
  routeSubscription: any;
  id: number = 0;
  objects: any = [];
  selectedObjects: any = [];
  user_id: number = 0;
  login: string = '';
  page: string = '';
  user: any = {ban: false,};

  TODO: boolean = false;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(
      params => {
        this.login = params['login'];

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

        this.page = '/@'+this.login;

        this.load();
      });
  }

  load() {
    this.postsService.articelsGetAll({count: 2000, type: 'blog', user_id: parseInt(""+this.user_id)})
      .subscribe((data) => {
        if (data.list) {
          for (let i = 0; i < data.list.length; i++) {
            data.list[i].metadata = JSON.parse(data.list[i].metadata);
          }

          this.objects = data.list;
        }

        this.postsService.processJWT(data);
      });
  }
}
