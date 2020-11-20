import { Component, OnInit } from '@angular/core';

import { PostsService } from '../posts/posts.service';

import { ActivatedRoute, Router } from '@angular/router';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  query: any = '';
  object: any = {};
  objects: any = [];
  routeSubscription: any;

  user: any;
  userRole: any;
  userId: any;

  type: string = 'users';
  objectId: any = 0;
  filter: string = '';

  document: any = {
    title: '',
    body: '',
  };

  TODO: boolean = false;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit() {
    $('.header__bottom-right-drop').hide();

    this.routeSubscription = this.route.params.subscribe(
      params => {
        $.magnificPopup.close({
          items: {
            src: '#p-page'
          }
        });

        this.user = this.postsService.getSession();
        this.userRole = this.postsService.getUserRole();
        this.userId = this.postsService.getUserId();

        this.type = this.route.snapshot.data.type;

        if (this.route.snapshot.params.id && !isNaN(this.route.snapshot.params.id)) {
          this.objectId = this.route.snapshot.params.id;
        }

        if (this.type == 'users' && this.objectId == 0) this.loadUsers();
        if (this.type == 'users' && this.objectId > 0) this.loadUser();

        if (this.type == 'posts' && this.objectId == 0) this.loadPosts();
        if (this.type == 'posts' && this.objectId > 0) this.loadPost();

        if (this.type == 'documents' && this.objectId == 0) this.loadDocuments();
        if (this.type == 'documents' && this.objectId > 0) this.loadDocument();
      });
  }


  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  loadPosts() {
    this.postsService.articelsGetAll({count: 200000, type: 'new', filter: 'banned'})
      .subscribe((data) => {
        if (data.list) {
          for (let i = 0; i < data.list.length; i++) {
            data.list[i].metadata = JSON.parse(data.list[i].metadata);
            data.list[i].displayName = this.postsService.getUserDisplayName(data.list[i].user);
            data.list[i].displayNameBlog = this.postsService.getUserDisplayNameBlog(data.list[i].user);
          }

          this.objects = data.list;
        }

        this.postsService.processJWT(data);
      });
  }

  loadPost() {
    this.postsService.articelsGetOne({id: +this.objectId})
      .subscribe((data) => {
        data.content.metadata = JSON.parse(data.content.metadata);

        this.object = data.content;

        this.postsService.processJWT(data);
      });
  }

  loadUsers() {
    this.postsService.getUsers({type: 'new', count: 20000000, filter: 'banned'})
      .subscribe((data) => {
        if (data.list) {
          let z = 0;

          for (let i = 0; i < data.list.length; i++) {
            if (z >= 2) z = 0;

            data.list[i].displayName = this.postsService.getUserDisplayName(data.list[i]);
            data.list[i].displayNameBlog = this.postsService.getUserDisplayNameBlog(data.list[i]);

            data.list[i].column = z;
            z++;
          }

          this.objects = data.list;
        }

        this.postsService.processJWT(data);
      });
  }

  loadUser() {
    this.postsService.getUser({id: +this.objectId})
      .subscribe((data) => {

        this.object = data.user;

        this.postsService.processJWT(data);
      });
  }

  loadDocuments() {
    this.objects = [];

    /*
    this.postsService.getDocuments({count: 200000})
      .subscribe((data) => {
        if (data.list) {
          for (let i = 0; i < data.list.length; i++) {
            data.list[i].metadata = JSON.parse(data.list[i].metadata);
          }

          this.objects = data.list;
        }

        this.postsService.processJWT(data);
      });
      */
  }

  loadDocument() {
    this.object = {};

    this.postsService.getFixPage({code: this.objectId})
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.object = data;

        this.postsService.processJWT(data);
      });
  }

  blockUser(o: any) {
    let action = 'unbanUser';
    if (!o.ban) {
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

  blockPost(o: any) {
    let action = 'unbanContent';
    if (!o.ban) {
      action = 'banContent';
    }

    this.postsService[action]({id: +o.id, description: ''})
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {

          this.loadPosts();

          alert(data.error);
          return;
        }

        this.loadPosts();

        this.postsService.processJWT(data);
      });
  }

  deleteDocument(o: any) {

    /*
    this.postsService.getDocument({id: +this.objectId})
      .subscribe((data) => {
        data.content.metadata = JSON.parse(data.content.metadata);

        this.object = data.content;

        this.postsService.processJWT(data);
      });
      */
  }

  saveDocument() {
    console.log(this.object);
    this.postsService.updateFixPage(this.object)
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.loadDocument();

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
