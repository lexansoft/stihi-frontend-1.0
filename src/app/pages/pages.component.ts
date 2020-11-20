import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import {PostsService} from "../posts/posts.service";

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: []
})
export class PagesComponent implements OnInit {
  id: any = '';
  object: any = [];
  routeSubscription: any;
  code: string = '';
  page: any = {
    title: '',
    html: '',
  };

  TODO: boolean = false;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(
      params => {

        $('#rightMenuCloseButton').click();

        $.magnificPopup.open({
          items: {
            src: '#p-about'
          },
          callbacks: {
            open: function() {},
            close: () => {
              this.router.navigate([{outlets: {popup: null}}]);
            }
          }
        });

        this.code = params['code'];
        this.loadObject();
      });
  }

  scrollTop() {
    let wrap = $(".mfp-wrap");

    wrap.stop().animate({ scrollTop: 0 }, 500, 'swing');
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  loadObject() {
    this.postsService.getFixPage({code: this.code})
      .subscribe((data) => {
        if (data.page) {
          this.page = data.page;
        }

        this.postsService.processJWT(data);
      });
  }
}
