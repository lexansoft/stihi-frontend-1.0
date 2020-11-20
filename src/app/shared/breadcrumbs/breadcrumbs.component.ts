import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: []
})
export class BreadcrumbsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    //         this.parentID = activatedRoute.parent.snapshot.paramMap.get( "id" );

    console.log(this.route.snapshot.parent);
    console.log(this.route.snapshot.root);
  }
}
