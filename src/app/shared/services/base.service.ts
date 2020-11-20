import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import {HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import {HeaderService} from "./header.service";
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';

declare var jquery:any;
declare var $ :any;

// @Injectable()
export abstract class BaseService {
  httpOptions: any = {};
  initial_uri: string = '';
  return: string = '';

  // headerService: HeaderService;
  // router: Router;

  constructor(
    protected _http: HttpClient,
    protected apiUrl: string,
    protected apiRoot?: string,
  ) {
    if (!apiRoot) this.apiRoot = "/api/v2/";

    this.apiUrl = this.apiRoot + this.apiUrl;
  }

  /*
    users
   */

  golosSignup (object: any): Observable<any> {
    return this._http.post(this.apiUrl + 'signup', object, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  golosSignin (object: any): Observable<any> {
    return this._http.post(this.apiUrl + 'login', object, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  saveSession(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  destroySession() {
    localStorage.removeItem('user');
    window.location.reload();
  }

  getSession() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) user.displayName = this.getUserDisplayName(user);

    return user;
  }

  getUserId() {
    let userId = 0;

    let user = this.getSession();
    if (user && user.sub) userId = user.sub;

    return userId;
  }


  getUserLogin(user: any) {
    if (user && user.names && user.names.gls && user.names.gls.trim().length > 0) return user.names.gls;
    if (user && user.names && user.names.stihi && user.names.stihi.trim().length > 0) return user.names.stihi;

    if (user && user.name) return user.name;

    if (user && user.names && user.names.length > 0) {
      for (let i = 0; i < user.names.length; i++) if (user.names[i].length > 0) return user.names[i];    
    }

    if (user && user.nickname && user.nickname.trim().length > 0) return user.nickname;

    return '';
  }

  getUserDisplayName(user: any) {
    if (user && user.nickname && user.nickname.trim().length > 0) return user.nickname;
    if (user && user.names && user.names.stihi && user.names.stihi.trim().length > 0) return user.names.stihi;
    if (user && user.names && user.names.gls && user.names.gls.trim().length > 0) return user.names.gls;

    if (user && user.names && user.names.length > 0) {
      for (let i = 0; i < user.names.length; i++) if (user.names[i].length > 0) return user.names[i];    
    }

    if (user && user.name) return user.name;

    return '';
  }

  getUserDisplayNameBlog(user: any) {
    if (user && user.names && user.names.gls && user.names.gls.length > 0) return user.names.gls;
    if (user && user.names && user.names.stihi && user.names.stihi.length > 0) return user.names.stihi;
    if (user && user.name) return user.name;

    if (user && user.nickname) return user.nickname;
    if (user && user.names && user.names.length > 0) {
      for (let i = 0; i < user.names.length; i++) if (user.names[i].length > 0) return user.names[i];    
    }

    return '';
  }

  getEarnings(o, type) {
    let v: number = 0;
    let exchange_rates: any = {
      gbg: 0,
      gold: 0,
    };
    if (localStorage.getItem('exchange_rates') && localStorage.getItem('exchange_rates').length > 0) exchange_rates = JSON.parse(localStorage.getItem('exchange_rates'));

    if (type == 0) v = +(o.val_gold + o.val_golos).toFixed(2);;
    if (type == 1) v = +(o.val_gold + o.val_golos).toFixed(2);;
    // if (type == 1) v = (o.val_gold * exchange_rates.gbg + o.val_golos * exchange_rates.gold);
    if (type == 3) {
    	if (!o.val_golos) return 0;
	    return +o.val_golos.toFixed(2);;
    }

    return +(Math.round(v * 100)/100).toFixed(2);;
  }

  getUserPower(value, type) {
    if (isNaN(value)) value = 0;

    // if (type == 'number') return Math.round(Number(value));
    // if (type == 'number') return Number(value);
    if (type == 'number') return Math.round(value * 100)/100;

    if (type == 'fish') {
		value = Math.round(Number(value));
		let gests = value;
  
		let MINNOW = 1000000;
		let CRUCIAN = 10000000;
		let DOLPHIN = 100000000;
		let ORCA = 1000000000;

		if (gests < 0) {
			return 'Морской конек';
		}
		if (gests < MINNOW) {
			return 'Морской конек';
		}
		if (gests < CRUCIAN) {
			return 'Килька';
		}
		if (gests < DOLPHIN) {
			return 'Дельфин';
		}
		if (gests < ORCA) {
			return 'Косатка';
		}

		return 'Кит';

    }

    if (type == 'image') {
    	value = Math.round(Number(value));
		let gests = value;
  
		let MINNOW = 1000000;
		let CRUCIAN = 10000000;
		let DOLPHIN = 100000000;
		let ORCA = 1000000000;

		if (gests < 0) {
			return '/frontend_assets_stihi/img/fish5.svg';
		}
		if (gests < MINNOW) {
			return '/frontend_assets_stihi/img/fish5.svg';
		}
		if (gests < CRUCIAN) {
			return '/frontend_assets_stihi/img/fish3.svg';
		}
		if (gests < DOLPHIN) {
			return '/frontend_assets_stihi/img/fish1.svg';
		}
		if (gests < ORCA) {
			return '/frontend_assets_stihi/img/fish2.svg';
		}

		return '/frontend_assets_stihi/img/fish4.svg';
    }

    return '';
  }

  getUserPowerOld(value, type) {
    if (isNaN(value)) value = 0;

    // if (type == 'number') return Math.round(Number(value)/1000000);
    if (type == 'number') return Number(value)/1000000;

    if (type == 'fish') {
      value = Math.round(Number(value)/1000000);

      let fish = 'Морской конек';

      if (value >= 0) fish = 'Морской конек';
      if (value >= 1000) fish = 'Килька';
      if (value >= 10000) fish = 'Дельфин';
      if (value >= 100000) fish = 'Косатка';
      if (value >= 1000000) fish = 'Кит';

      return fish;
    }

    if (type == 'image') {
      value = Math.round(Number(value)/1000000);

      let fish = '/frontend_assets_stihi/img/fish5.svg';

      if (value >= 0) fish = '/frontend_assets_stihi/img/fish5.svg';
      if (value >= 1000) fish = '/frontend_assets_stihi/img/fish3.svg';
      if (value >= 10000) fish = '/frontend_assets_stihi/img/fish1.svg';
      if (value >= 100000) fish = '/frontend_assets_stihi/img/fish2.svg';
      if (value >= 1000000) fish = '/frontend_assets_stihi/img/fish4.svg';

      return fish;
    }

    return '';
  }

  getUserReputation(value) {
    if (isNaN(value)) value = 0;
    let rep2 = value;

    if (rep2 == null) return rep2;
    let rep = String(rep2);
    const neg = rep.charAt(0) === '-';
    rep = neg ? rep.substring(1) : rep;
    let out = this.log10(rep);
    if (isNaN(out)) out = 0;
    out = Math.max(out - 9, 0);
    out = (neg ? -1 : 1) * out;
    out = out * 9 + 25;
    out = Math.floor(out);
    return out;
  }

  log10(str: string) {
    const leadingDigits = parseInt(str.substring(0, 4));
    const log = Math.log(leadingDigits) / Math.LN10 + 0.00000001;
    const n = str.length - 1;

    let z = n + (log - Math.floor(log));

    return z;
  }

  processUserData(user: any, data: any) {
    for(let k in data){
      if (data[k]) user[k] = data[k];
    }

    if (!user.avatar_image) user.avatar_image = '/frontend_assets_stihi/img/avatar_default.png';
    if (!user.background_image) user.background_image = '/frontend_assets_stihi/img/banner.jpg';

    user.displayName = this.getUserDisplayName(user);

    return user;
  }

  getUserRole() {
    let role = 'u';

    let user = this.getSession();
    if (user && user.sub) {
      role = user.r;
    }

    return role;
  }

  getUserToken() {
    let userId = '';

    let user = this.getSession();
    if (user && user.token) userId = user.token;

    return userId;
  }

  getUserPermissions() {
    let userId = 0;

    /*
    let user = this.getSession();
    if (user && user.permissions) userId = user.permissions;
    */

    return userId;
  }

  isLoggedIn() {
    if (this.getUserId() > 0) return true;

    return false;
  }

  processJWT(data: any) {
    if (data && data.token && data.token.length > 10) {
      let base64Url = data.token.split('.')[1];
      let base64 = base64Url.replace('-', '+').replace('_', '/');
      let parsedToken = JSON.parse(window.atob(base64));

      // console.log(parsedToken);

      parsedToken.token = data.token;

      this.saveSession(parsedToken);
    }
  }

  /*
    articles
   */

  getAnnouncePageList (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_announce_pages_list', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  getAnnouncesList (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_announces_list', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  createAnnounce (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'create_announce', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  getUser (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_user_info', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  getUsers (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_users_list', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  getExchangeRates (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_exchange_rates', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  updateUser (object: any): Observable<any> {
    return this._http.post(this.apiUrl + 'update_user_info', object, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  getCaptcha (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_captcha', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  getCategories (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_rubrics_list', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  articelsGetAll (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_articles_list', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  articelsGetOne (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_article', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  articelsGetComments (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_comments_list', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  articelsSaveComment (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'create_comment', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  articelsSave (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'create_article', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  voteSave (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'create_vote', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  banUser (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'ban_user', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  unbanUser (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'unban_user', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  banContent (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'ban_content', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  unbanContent (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'unban_content', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  updateFixPage (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'update_fix_page', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  getFixPage (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_fix_page', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  getUserBattery (params?: any): Observable<any> {
    if (params) params = 'get_user_battery?params='+JSON.stringify(params); else params = 'get_user_battery';

    return this._http.get<any>(this.apiUrl+params, this.getHeaders())
      .pipe(
        tap(_ => () => {}),
        catchError(this.handleError<any>())
      );
  }

  getUserTagsList (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_user_tags_list', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  deleteContent (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'delete_content', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  newPassword (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'new_password', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  initPostJS() {
  }

  getVotesList (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_votes_list', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  getUserPeriodLeader (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_user_period_leader', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  getUserCommentsList (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_user_comments_list', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  updateComment (params?: any): Observable<any> {
    if (params.body) params.body = params.body.split('&hellip;').join('...');
    if (params.content.body) params.content.body = params.content.body.split('&hellip;').join('...');

    return this._http.post(this.apiUrl + 'update_comment', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  updateArticle (params?: any): Observable<any> {
    params.body = params.body.split('&hellip;').join('...');

    return this._http.post(this.apiUrl + 'update_article', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  getAllCommentsList (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_all_comments_list', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  getComment (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_comment', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  //

  userSubscribe (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'user_subscribe', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  userUnsubscribe (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'user_unsubscribe', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  getUsersSubscriptionsList (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_user_subscriptions_list', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  getUsersSubscriptionsListProduction (params?: any): Observable<any> {
    return this._http.post('https://stihi.io/api/v1/' + 'get_user_subscriptions_list', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  getUsersSubscribersList (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_user_subscribers_list', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  refreshUsersSubscriptions(userId: any) {
    this.getUsersSubscriptionsList({user_id: userId})
      .subscribe((data) => {

        if (data.error && data.error.length > 0) {
          return;
        }

        let users = [];
        for (let i =0; i < data.list.length; i++) users[data.list[i].id] = data.list[i];

        localStorage.setItem('user_subscriptions', JSON.stringify(users));
      });
  }

  createInvite (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'create_invite', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  getInvitesList (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_invites_list', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  sendTokens (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'send_tokens', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  showPrivateKeys (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'show_private_keys', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  sendGolosToPower (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'send_golos_to_power', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  sendPowerToGolos (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'send_power_to_golos', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  getWithdrawInfo (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_withdraw_info', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  getHistory (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'get_history', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  getSharpayShareCount (params?: any): Observable<any> {
    return this._http.post(this.apiUrl + 'sharpay/get_share_count', params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  /*
    files
   */

  saveFileTmp(url: string, file: File, object: any): Observable<HttpEvent<any>> {
    let method = "POST";
    /*
    if (object.id > 0) {
      method = "PUT";
      url += "/" + object.id;
    }
    */

    let formData = new FormData();
    formData.append('upload', file);

    for (let key in object) {
      formData.append(key, object[key]);
    }

    let params = new HttpParams();

    const options = {
      params: params,
      headers: new HttpHeaders().set('Authorization', "BEARER "+this.getUserToken()),
      reportProgress: true,
    };

    const req = new HttpRequest(method, url, formData, options);
    return this._http.request(req);
  }

  /*
    generic
   */

  getAll (params?: any): Observable<any> {
    if (params) params = '?params='+JSON.stringify(params); else params = '';

    return this._http.get<any>(this.apiUrl+params, this.getHeaders())
      .pipe(
        tap(_ => () => {}),
        catchError(this.handleError<any>())
      );
  }

  getById (id: number, params?: any): Observable<any> {
    if (params) params = '?params='+JSON.stringify(params); else params = '';

    return this._http.get<any>(this.apiUrl+'/'+id+params, this.getHeaders())
      .pipe(
        tap(_ => () => {}),
        catchError(this.handleError<any>())
      );
  }

  save (object: any): Observable<any> {
    if (object.id > 0) {
      return this._http.put(this.apiUrl + '/' + object.id, object, this.getHeaders()).pipe(
        tap(_ => () => {}),
        catchError(this.handleError<any>())
      );
    } else {
      return this._http.post(this.apiUrl, object, this.getHeaders()).pipe(
        tap(_ => () => {}),
        catchError(this.handleError<any>())
      );
    }
  }

  recover (object: any): Observable<any> {
    return this._http.put(this.apiUrl + '/recover', object, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  delete (id: number, params?: any): Observable<any> {
    if (params) params = '?params='+JSON.stringify(params); else params = '';

    return this._http.delete<any>(this.apiUrl + '/' + id + params, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  refreshBalance (object: any): Observable<any> {
    return this._http.post(this.apiUrl + '/refresh_balance', object, this.getHeaders()).pipe(
      tap(_ => () => {}),
      catchError(this.handleError<any>())
    );
  }

  /*
    shared
   */

  getHeaders() {
    return this.httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': "BEARER "+this.getUserToken(),
        })
    };
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.status && error.status == 403) {
        this.destroySession();
        return;
      }

      return error.error.errors;
    };
  }
}