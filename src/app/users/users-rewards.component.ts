import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-users-rewards',
  templateUrl: './users-rewards.component.html',
  styleUrls: []
})
export class UsersRewardsComponent implements OnInit {
  routeSubscription: any;
  id: number = 0;
  objects: any = [];
  selectedObjects: any = [];

  type: string = 'curator';
  login: string = '';
  page: string = '';
  user: any = {ban: false,};

  TODO: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(
      params => {
        this.login = params['login'];
      });
  }

  load() {
    //
  }
}
