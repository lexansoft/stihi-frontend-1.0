import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';

import { HttpClientModule } from '@angular/common/http'

// import { AgGridModule } from "ag-grid-angular";
// import { SortablejsModule } from 'angular-sortablejs';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

// import { BootstrapModalModule } from 'angularx-bootstrap-modal';
import { NgSelectModule } from '@ng-select/ng-select';
// import { CKEditorModule } from 'ng2-ckeditor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { StatusPipe } from './shared/pipes/status.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { OembedPipe } from './shared/pipes/oembed.pipe';

import { SanitizeHtmlPipe } from './shared/pipes/sanitizehtml.pipe';
import { HowLongAgoPipe } from './shared/pipes/howLongAgo.pipe';
import { NormalizeDatePipe } from './shared/pipes/normalizeDate.pipe';
import { ReversePipe } from './shared/pipes/reverse.pipe';
import { ProcessPostBodyPipe } from './shared/pipes/processPostBody.pipe';

import { HeaderService } from './shared/services/header.service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

// import { AgGridFunctions } from "./shared/ag-grid/functions";
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { CommentsComponent } from './shared/comments/comments.component';

import {AuthorsComponent} from "./authors/authors.component";

import {PostsListComponent} from "./posts/posts-list.component";
import {PostsAddComponent} from "./posts/posts-add.component";
import {PostsAnnounceComponent} from "./posts/posts-announce.component";
import {PostsDetailComponent} from "./posts/posts-detail.component";
import {PostsItemComponent} from "./posts/posts-item.component";

import {UsersBlogComponent} from "./users/users-blog.component";
import {UsersContentComponent} from "./users/users-content.component";
import {UsersHeaderComponent} from "./users/users-header.component";
import {UsersLeftMenuComponent} from "./users/users-left-menu.component";
import {UsersSettingsComponent} from "./users/users-settings.component";
import {UsersSubscriptionsComponent} from "./users/users-subscriptions.component";
import {UsersRewardsComponent} from "./users/users-rewards.component";
import {UsersWalletsComponent} from "./users/users-wallets.component";
import {PagesComponent} from "./pages/pages.component";
import {SearchComponent} from "./search/search.component";
import {UsersBlogInviteComponent} from "./users/users-blog-invite.component";
import {UsersCommentsComponent} from "./users/users-comments.component";
import {PostsService} from "./posts/posts.service";

import {RemoveHost} from "./shared/directives/remove-host.directive";
import {AdminComponent} from "./admin/admin.component";
import {CommentsDetailComponent} from "./shared/comments/comments-detail.component";
import {BaseService} from "./shared/services/base.service";

import {ExternalLinkWarningComponent} from "./pages/external-link-warning.component";

import { Select2Module } from 'ng2-select2';

@NgModule({
  declarations: [
    StatusPipe,
    FilterPipe,
    SanitizeHtmlPipe,
    HowLongAgoPipe,
    NormalizeDatePipe,
    ReversePipe,
    ProcessPostBodyPipe,
    OembedPipe,

    RemoveHost,

    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    CommentsComponent,

    AuthorsComponent,

    PostsListComponent,
    PostsAddComponent,
    PostsAnnounceComponent,
    PostsDetailComponent,
    PostsItemComponent,
    CommentsDetailComponent,

    UsersBlogComponent,
    UsersBlogInviteComponent,
    UsersContentComponent,
    UsersHeaderComponent,
    UsersLeftMenuComponent,
    UsersSettingsComponent,
    UsersSubscriptionsComponent,
    UsersRewardsComponent,
    UsersWalletsComponent,
    UsersCommentsComponent,

    PagesComponent,

    SearchComponent,

    AdminComponent,

    ExternalLinkWarningComponent,
  ],
  imports: [
  	Select2Module,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // CKEditorModule,
    CKEditorModule,
    NgSelectModule,
    //NgSelectModule.forRoot({notFoundText: 'Не найдено', typeToSearchText: 'Введите текст что бы искать...', clearAllText: "Очистить", addTagText: "Добавить новый элемент"}),
    // BootstrapModalModule.forRoot({container:document.body}),
    /*
    AgGridModule.withComponents([
      //
    ]),
    */
    // SortablejsModule.forRoot({ animation: 150 }),
// using specific options with ValueProvider and passing HttpClient
    MarkdownModule.forRoot(    {
      provide: MarkedOptions,
      useValue: {
        gfm: true,
        breaks: true,
      },
    }),
  ],
  entryComponents: [],
  providers: [
    // AgGridFunctions,
    HeaderService,

    PostsService,
    // BaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
