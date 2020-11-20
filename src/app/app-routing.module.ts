import { NgModule }             from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';

import {AuthorsComponent} from "./authors/authors.component";
import {PostsListComponent} from "./posts/posts-list.component";
import {PostsAddComponent} from "./posts/posts-add.component";
import {UsersBlogComponent} from "./users/users-blog.component";
import {UsersContentComponent} from "./users/users-content.component";
import {UsersSettingsComponent} from "./users/users-settings.component";
import {UsersSubscriptionsComponent} from "./users/users-subscriptions.component";
import {UsersRewardsComponent} from "./users/users-rewards.component";
import {UsersWalletsComponent} from "./users/users-wallets.component";
import {PagesComponent} from "./pages/pages.component";
import {SearchComponent} from "./search/search.component";
import {UsersBlogInviteComponent} from "./users/users-blog-invite.component";
import {UsersCommentsComponent} from "./users/users-comments.component";
import {PostsAnnounceComponent} from "./posts/posts-announce.component";
import {PostsDetailComponent} from "./posts/posts-detail.component";
import {AdminComponent} from "./admin/admin.component";
import {ExternalLinkWarningComponent} from "./pages/external-link-warning.component";

const routes: Routes = [
  { path: 'pages/:code', component: PagesComponent, outlet: 'popup' },

  { path: 'posts/index', redirectTo: '', pathMatch: 'full' },
  { path: '', component: PostsListComponent, data: {type: 'index'}, pathMatch: 'full' },

  { path: 'authors/:type', component: AuthorsComponent, data: {} },
  { path: 'authors', component: AuthorsComponent, data: {} },

  { path: 'posts/comments', component: PostsListComponent, data: {type: 'comments'} },
  // { path: 'posts/index', component: PostsListComponent, data: {type: 'index'} },
  { path: 'posts/feed', component: PostsListComponent, data: {type: 'feed'} },
  { path: 'posts/new', component: PostsListComponent, data: {type: 'new'} },
  { path: 'posts/main', redirectTo: '/posts/index', pathMatch: 'full' },

  { path: 'external_link_warning', component: ExternalLinkWarningComponent, data: {} },

  { path: 'posts/new/:tag', component: PostsListComponent, data: {type: 'new'} },
  { path: 'posts/actual/:tag', component: PostsListComponent, data: {type: 'actual'} },
  { path: 'posts/popular/:tag', component: PostsListComponent, data: {type: 'popular'} },
  { path: 'posts/feed/:tag', component: PostsListComponent, data: {type: 'feed'} },
  { path: 'posts/comments/:tag', component: PostsListComponent, data: {type: 'comments'} },

  { path: 'posts/actual', component: PostsListComponent, data: {type: 'actual'} },
  { path: 'posts/popular', component: PostsListComponent, data: {type: 'popular'} },
  { path: 'main', component: PostsListComponent, data: {type: 'main'} },
  { path: 'posts/:id/edit', component: PostsAddComponent, data: {} },
  { path: 'posts/add', redirectTo: '/posts/0/edit', pathMatch: 'full' },
  { path: 'posts/:id/announce', component: PostsAnnounceComponent, data: {} },
  { path: 'posts/:id/comments/:commentId', component: PostsListComponent, data: {type: 'popular'} },
  { path: 'posts/:id', component: PostsListComponent, data: {type: 'popular'} },

  {
    matcher: mF,
    children: [
      { path: '', component: UsersBlogComponent, data: {}, pathMatch: 'full' },
      { path: 'blog', component: UsersBlogComponent, data: {} },
      { path: 'blog/invite', component: UsersBlogInviteComponent, data: {} },
      { path: 'blog/:tag', component: UsersBlogComponent, data: {} },
      { path: 'content', component: UsersContentComponent, data: {} },
      { path: 'settings', component: UsersSettingsComponent, data: {} },
      { path: 'subscriptions', component: UsersSubscriptionsComponent, data: {type: 'subscriptions'} },
      { path: 'subscribers', component: UsersSubscriptionsComponent, data: {type: 'subscribers'} },
      { path: 'rewards', component: UsersRewardsComponent, data: {} },
      { path: 'wallets/:tab', component: UsersWalletsComponent, data: {}, },
      { path: 'wallets', component: UsersWalletsComponent, data: {}, },
      { path: 'comments', component: UsersCommentsComponent, data: {type: 'reply'} },
      { path: 'comments/owner', component: UsersCommentsComponent, data: {type: 'owner'} },
      { path: 'comments/reply', component: UsersCommentsComponent, data: {type: 'reply'} },
    ],
  },
  { path: 'search/:query', component: SearchComponent, data: {} },

  { path: 'admin/users', component: AdminComponent, data: {type: 'users'} },
  { path: 'admin/users/:id', component: AdminComponent, data: {type: 'users'} },
  { path: 'admin/posts', component: AdminComponent, data: {type: 'posts'} },
  { path: 'admin/posts/:id', component: AdminComponent, data: {type: 'posts'} },
  { path: 'admin/documents', component: AdminComponent, data: {type: 'documents'} },
  { path: 'admin/documents/:id', component: AdminComponent, data: {type: 'documents'} },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

export function mF (url: UrlSegment[]) {
  let login = '';
  login = url.toString().split('/')[0].replace('@', '').split(',')[0];

  return url.toString().substring(0, 1) == "@" ? ({
    consumed: [url[0]],
    posParams: {
      login: new UrlSegment(login, {}),
    }
  }) : null;
}