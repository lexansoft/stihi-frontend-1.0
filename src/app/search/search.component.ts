import { Component, OnInit } from '@angular/core';

import { PostsService } from '../posts/posts.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent implements OnInit {
  query: any = '';
  object: any = [];
  routeSubscription: any;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(
      params => {
        this.query = params['query'];
        // this.loadObject();
      });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  loadObject() {
    /*
    this.currenciesService.getAll({"owner": 40,})
      .subscribe((data) => {
        this.objects = data.data;
      });
      */
  }
}
