import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import {PostsService} from "../posts/posts.service";

import {Location} from '@angular/common';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-external-link-warning',
  templateUrl: './external-link-warning.component.html',
  styleUrls: []
})
export class ExternalLinkWarningComponent implements OnInit {
  id: any = '';
  object: any = [];
  routeSubscription: any;
  code: string = '';
  page: any = {
    title: '',
    html: '',
  };

  targetLink: string = '';
  returnLink: string = '';

  TODO: boolean = false;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location,
    ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(
      params => {
        $('.header__bottom-right-drop').hide();

        $('#rightMenuCloseButton').click();
        $('.mfp-close').click();

        if (this.route.snapshot.queryParams["targetLink"]) this.targetLink = this.route.snapshot.queryParams["targetLink"];
        if (this.route.snapshot.queryParams["returnLink"]) this.returnLink = this.route.snapshot.queryParams["returnLink"];
      });
  }

  backClicked() {
    if (window.location.search.indexOf('returnLink') > -1) {
      this._location.back();
    } else {
      this._location.back();
      this._location.back();

      console.log('in4');
    }
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
