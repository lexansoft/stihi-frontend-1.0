import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import {PostsService} from "../posts/posts.service";
import { Subscription }   from 'rxjs/Subscription';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: []
})
export class AuthorsComponent implements OnInit {
  objects: any = [];
  type: string = 'name';
  is_online: boolean = true;
  filter: string = '';
  routeSubscription: any;

  TODO: boolean = false;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(
      params => {
        $('.header__bottom-right-drop').hide();

        if (this.route.snapshot.params.type) {
          this.type = decodeURI(this.route.snapshot.params.type);
        }

        let cacheType = localStorage.getItem('author_type');
        if (cacheType && cacheType.length > 0) this.type = cacheType;

        this.loadUsers();
      });
  }

  setType() {
    localStorage.setItem('author_type', this.type);
  }

  loadUsers() {
    this.objects = [];

    this.postsService.getUsers({type: this.type, count: 999999999})
      .subscribe((data) => {
        if (data.list) {
          for (let i = 0; i < data.list.length; i++) {
            data.list[i].displayName = this.postsService.getUserDisplayName(data.list[i]);
            data.list[i].displayNameBlog = this.postsService.getUserDisplayNameBlog(data.list[i]);

            if (data.list[i].displayName.length == 0 || data.list[i].ban) data.list.splice(i, 1);
          }

          let z = 0;
          for (let i = 0; i < data.list.length; i++) {
            if (z > 1) z = 0;

            data.list[i].column = z;
            z++;
          }

          this.objects = data.list;
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
}
