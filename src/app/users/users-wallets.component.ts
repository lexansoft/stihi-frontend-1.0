import { Component, ElementRef, HostListener, Input, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {PostsService} from "../posts/posts.service";

declare var jquery:any;
declare var $ :any;
declare var noUiSlider: any;

@Component({
  selector: 'app-users-wallets',
  templateUrl: './users-wallets.component.html',
  styleUrls: []
})
export class UsersWalletsComponent implements OnInit, OnDestroy {
  routeSubscription: any;
  id: number = 0;
  mode: number = 0;

  tab: string = 'balances';

  objects: any = [];
  login: string = '';
  password: string = '';
  page: string = '';
  user: any = {ban: false,};

  keys: any = {
    posting: '',
    active: '',
    owner: '',
    memo: '',
    amount: 0,
  };

  object: any = {
    val_golos: 0,
    keys: {},
  };

  TODO: boolean = false;

  is_show_menu_golos: boolean = false;
  is_show_menu_power: boolean = false;
  is_show_menu_gold: boolean = false;
  is_show_menu_safe: boolean = false;
  is_show_menu_account: boolean = false;

  secret: any = {
    login: '',
    key: '',
    is_auth: false,
  };

  sendTokensForm: any = {
    recipient: '',
    currency: 'GOLOS',
    note: '',
  };

  is_show_send_tokens_after_auth: boolean = false;

  recipientId: string = '';
  recipientId2: string = '';

  sendPowerForm: any = {
    recipient: '',
    currency: 'GOLOS',
    note: '',
  };

  is_show_send_power_after_auth: boolean = false;
  power_to: boolean = false;

  auId: number = 0;
  auName: string = '';
  auRole: string = '';

  qr_preview: any = {
    key: '',
    title: '',
  };

  sendPowerToGolosForm: any = {
    recipient: '',
    currency: 'GOLOS',
    note: '',
    amount: '',
  };

  authUserLogin: string = '';
  authUserId: string = '';

  is_show_send_power_to_golos_after_auth: boolean = false;
  power_to_golos_to: boolean = false;

  slider: any;
  slider_dom: any;
  slider_percentage: number = 0;

  user_power_value: number = 0;
  is_power_to_golos_sent: boolean = false;

  is_show_send_power_to_golos_cancel_after_auth: boolean = false;

  power_to_golos: any = {
    amount: 0,
    paid_out: 0,
    days: 0,
    date: 'test',
  };

  isInvalidAmountSendTokensForm: boolean = false;
  isInvalidAmountSendPowerForm: boolean = false;
  isInvalidAmountSendPowerToGolosForm: boolean = false;

  historyOffset: number = 0;
  isShowHistory: boolean = false;
  history: any = [];

  showPaymentTooltip: boolean = false;

  isFirstLaunch: boolean = true;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    this.is_show_menu_golos = false;
    this.is_show_menu_power = false;
    this.is_show_menu_gold = false;
    this.is_show_menu_safe = false;
    this.is_show_menu_account = false;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
    ) {}

  ngOnDestroy() {
    if (!this.slider) return;

    this.slider_dom.noUiSlider.destroy();  
  }

  ngOnInit() {
    this.objects.push({id: 0});
    this.objects.push({id: 1});

    this.routeSubscription = this.route.params.subscribe(
      params => {
        let authUser = this.postsService.getSession();
        if (authUser && authUser.name) {
          this.authUserLogin = this.postsService.getUserLogin(this.postsService.getSession());
          this.authUserId = this.postsService.getSession().name;

          if (this.authUserLogin) this.secret.login = this.authUserLogin;        
        }

        this.auId = this.postsService.getUserId();
        this.auRole = this.postsService.getUserRole();

        if (params['tab']) this.tab = params['tab'];

        if (this.tab == 'history') this.isShowHistory = true;

        this.login = params.login;

        this.load();
      });
  }

  toggleMenu(type: any, newState: boolean) {
    setTimeout(() => {
      if (type == 'golos') this.is_show_menu_golos = newState;
      if (type == 'gold') this.is_show_menu_gold = newState;
      if (type == 'power') this.is_show_menu_power = newState;
      if (type == 'safe') this.is_show_menu_safe = newState;
      if (type == 'account') this.is_show_menu_account = newState;

    }, 50);
  }

  getUserPower(value, type) {
    return this.postsService.getUserPower(value, type);
  }

  getUserReputation(value) {
    return this.postsService.getUserReputation(value);
  }

  showPrivateKeys() {
    this.postsService.showPrivateKeys({login: this.login, password: this.secret.key})
      .subscribe((data) => {
        this.keys = data;
      });
  }

  refreshBalance() {
    $('#btnRefreshBalance').text('Подождите...');

    this.postsService.refreshBalance({})
      .subscribe((data) => {
        $('#btnRefreshBalance').text('Обновлен!');

        setTimeout(()=>{
          $('#btnRefreshBalance').text('Обновить баланс');
        }, 1000);

      	this.load();
      });
  }

  getRecipientId() {
    this.recipientId = '';
    if (!this.sendTokensForm.recipient || this.sendTokensForm.recipient.length < 1) return;

    this.postsService.getUser({name: this.sendTokensForm.recipient})
      .subscribe((data) => {
        if (data && data.user) this.recipientId = data.user.name;
      });
  }

  getRecipientId2() {
    this.recipientId2 = '';
    if (!this.sendPowerForm.recipient || this.sendPowerForm.recipient.length < 1) return;

    this.postsService.getUser({name: this.sendPowerForm.recipient})
      .subscribe((data) => {
        if (data && data.user) this.recipientId2 = data.user.name;
      });
  }

  load() {
  	if (!this.login || this.login.length < 1) return;
  	
    this.postsService.getUser({name: this.login})
      .subscribe((data) => {
        let user: any = {};
        this.id = data.user.id;

        this.object = this.postsService.processUserData(user, data.user);
        this.object.keys = data.user.keys;

        if (!this.object.val_golos) this.object.val_golos = 0;
        if (!this.object.val_gold) this.object.val_gold = 0;
        if (!this.object.val_power) this.object.val_power = 0;
        if (!this.object.val_safe) this.object.val_safe = 0;
        if (!this.object.val_account) this.object.val_account = 0;

        this.user_power_value = Number(this.getUserPower((this.object.val_power_golos), 'number'));

        this.loadWirhdrawal();
        this.loadHistory();
      });
  }

  loadHistory() {
    this.postsService.getHistory({offset: this.historyOffset, count: 999999999})
      .subscribe((data) => {
      	this.history = [];

      	if (data.history && data.history.length > 0) {
      		for (let i =0; i < data.history.length; i++) {
      			let time_ago: any = '';
      			let transaction_type: any = '';
      			let transaction_currency: any = '';
      			let transaction_amount: any = '';

		        time_ago = ((+new Date() - Date.parse(data.history[i].time)) / 86400000);

		        if (time_ago <= 30 && time_ago >= 1) time_ago = Math.ceil(time_ago) + ' дн.';
		        if (time_ago > 30) time_ago = Math.ceil(Math.round(time_ago/30)) + ' мес.';
            if (time_ago < 1) time_ago = Math.ceil(time_ago*(60*24)) + ' мин.';

		        //

		        if (data.history[i].type == 'transfer' && data.history[i].to_user == this.login) transaction_type = 'получено';
		        if (data.history[i].type == 'transfer' && data.history[i].to_user != this.login) transaction_type = 'переведено';
		        if (data.history[i].type == 'transfer_from_savings') transaction_type = 'начало перевода из сейфа';
		        if (data.history[i].type == 'transfer_to_savings') transaction_type = 'перевод в сейф';
		        if (data.history[i].type == 'transfer_to_vesting') transaction_type = 'перевод GOLOS в СГ';
		        if (data.history[i].type == 'withdraw_vesting') transaction_type = 'начало перевода из СГ в GOLOS';
		        if (data.history[i].type == 'fill_vesting_withdraw') transaction_type = 'порция перевода из СГ в GOLOS';
		        if (data.history[i].type == 'fill_transfer_from_savings') transaction_type = 'порция перевода из сейфа';
		        if (data.history[i].type == 'author_reward') transaction_type = 'авторское вознаграждение';
		        if (data.history[i].type == 'comment_reward') transaction_type = 'вознаграждение за пост';
		        if (data.history[i].type == 'curation_reward') transaction_type = 'кураторское вознаграждение';

		        //

		        if (data.history[i].power_change_golos) {
		        	transaction_amount = Math.round(data.history[i].power_change_golos * 100)/100;
		        	transaction_currency = 'GOLOS';
		        }
		        if (data.history[i].power_change) {
		        	transaction_amount = Math.round(data.history[i].power_change * 100)/100;
		        	transaction_currency = 'GST';
		        }
		        if (data.history[i].golos_change) {
		        	transaction_amount = Math.round(data.history[i].golos_change * 100)/100;
		        	transaction_currency = 'GOLOS';
		        }
		        if (data.history[i].gold_change) {
		        	transaction_amount = Math.round(data.history[i].gold_change * 100)/100;
		        	transaction_currency = 'GBG';
		        }

      			data.history[i].time_ago = time_ago;
      			data.history[i].transaction_type = transaction_type;
      			data.history[i].transaction_currency = transaction_currency;
      			data.history[i].transaction_amount = transaction_amount;
            data.history[i].time_string = data.history[i].time.replace('+0000 UTC', '');
      		}

	      	this.history = data.history;
      	}
      });
  }

  loadWirhdrawal() {
    let userId = 0;

    userId = this.id;

    this.postsService.getWithdrawInfo({user_id: userId})
      .subscribe((data) => {
      	if ((data.error && data.error.length > 0) || !data.info || data.info.total_withdraw_golos == 0) return;

        let d = new Date(data.info.next_withdraw_time);
        d.setDate(d.getDate());
        let dtString = d.getDate()  + "." + (d.getMonth()+1) + "." + d.getFullYear() + ", " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

        this.power_to_golos.amount = Number(this.getUserPower((data.info.total_withdraw_golos), 'number'));
        this.power_to_golos.days = Math.ceil(( Date.parse(data.info.next_withdraw_time) - +new Date() ) / 86400000);
        this.power_to_golos.paid_out = Number(this.getUserPower((data.info.current_withdraw_golos), 'number'));
        this.power_to_golos.date = dtString;

        if (data.info.total_withdraw_golos != data.info.current_withdraw_golos) this.is_power_to_golos_sent = true;
      });
  }

  showAuth() {
    $.magnificPopup.open({
      items: {
        src: '#p-auth'
      },
      //closeOnBgClick: false,
      callbacks: {
        beforeOpen: function() {  this.wrap.removeAttr('tabindex') },
        open: function() {},
        close: () => {}
      }
    });
  }

  auth() {
    if (this.secret.key.length < 5 || this.secret.login.length < 3) {
      alert('Пожалуйста введите корректный логин и пароль');
      return;
    }

    this.loadHistory();

    this.secret.is_auth = true;

    $.magnificPopup.close();

    this.showPrivateKeys();
    if (this.is_show_send_tokens_after_auth) this.submitSendTokensForm();
    if (this.is_show_send_power_after_auth) this.submitSendPowerForm();
    if (this.is_show_send_power_to_golos_after_auth) this.submitSendPowerToGolosForm();
    if (this.is_show_send_power_to_golos_cancel_after_auth) this.cancelGolosToPower();

  }

  sendTokens(type: string = '') {
    if (type && type.length > 0) this.sendTokensForm.currency = type;

    this.secret.key = '';

    $.magnificPopup.open({
      items: {
        src: '#p-send-tokens'
      },
      //closeOnBgClick: false,
      callbacks: {
        beforeOpen: function() {  this.wrap.removeAttr('tabindex') },
        open: function() {},
        close: () => {}
      }
    });
  }

  submitSendTokensForm() {
    if (this.sendTokensForm.recipient.length < 1) {
      alert('Пожалуйста введите получателя');
      return;
    }

    if (this.sendTokensForm.amount <= 0) {
      alert('Пожалуйста введите количество');
      return;
    }

    if (this.secret.key.length < 5 || this.secret.login.length < 3) {
      // $.magnificPopup.close();

      setTimeout(()=>{
        this.is_show_send_tokens_after_auth = true;
        this.showAuth();      
        }, 10);

      return;
    }

    this.postsService.sendTokens({
        login: this.secret.login,
        password: this.secret.key,
        target: this.sendTokensForm.recipient,
        value: +this.sendTokensForm.amount,
        unit: this.sendTokensForm.currency,
      })
      .subscribe((data) => {
        // console.log(data);

        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.loadHistory();
        this.refreshBalance();

        this.sendTokensForm.amount = '';
        this.sendTokensForm.to = '';
        this.sendTokensForm.recipient = '';
        this.sendTokensForm.currency= 'GOLOS';

        // alert('Успешно отправлено');

        $.magnificPopup.close();

        this.postsService.processJWT(data);
      });
  }

  sendPower(type: string = '') {
    if (type && type.length > 0) this.sendPowerForm.currency = type;

    this.secret.key = '';

    $.magnificPopup.open({
      items: {
        src: '#p-send-power'
      },
      //closeOnBgClick: false,
      callbacks: {
        beforeOpen: function() {  this.wrap.removeAttr('tabindex') },
        open: function() {},
        close: () => {}
      }
    });
  }

  submitSendPowerForm() {
    if (this.power_to && this.sendPowerForm.recipient.length < 1) {
      alert('Пожалуйста введите получателя');
      return;
    }

    if (this.sendPowerForm.amount <= 0) {
      alert('Пожалуйста введите количество');
      return;
    }

    if (this.secret.key.length < 5 || this.secret.login.length < 3) {
      //$.magnificPopup.close();

      setTimeout(()=>{
        this.is_show_send_power_after_auth = true;
        this.showAuth();      
        }, 10);

      return;
    }

    let params: any = {
        login: this.secret.login,
        password: this.secret.key,
        value: +this.sendPowerForm.amount,
      };

    if (this.power_to) {
      params.target = this.sendPowerForm.recipient;
    }

    this.postsService.sendGolosToPower(params)
      .subscribe((data) => {
        // console.log(data);

        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.loadHistory();

        this.sendPowerForm.amount = '';
        this.sendPowerForm.to = '';
        this.sendPowerForm.recipient = '';
        this.sendPowerForm.currency= 'GBG';

        // alert('Успешно отправлено');

        $.magnificPopup.close();

        this.power_to = false;

        this.postsService.processJWT(data);
      });
  }

  togglePowerTo() {
    console.log(this.power_to);
    this.power_to = !this.power_to;

    console.log(this.power_to);
  }

  openQR(key: string = '', title: string = '') {
    this.qr_preview.key = key;
    this.qr_preview.title = title;

    $.magnificPopup.open({
      items: {
        src: '#p-qr-preview'
      },
      //closeOnBgClick: false,
      callbacks: {
        beforeOpen: function() {  this.wrap.removeAttr('tabindex') },
        open: function() {},
        close: () => {}
      }
    });
  }

  formatAmountInput(type: string) {
    if (type == 'sendTokensForm') {
      if (this.sendTokensForm && this.sendTokensForm.amount) this.sendTokensForm.amount = this.sendTokensForm.amount.split(',').join('.').replace(/[^0-9.]/g, "");

      if (isNaN(this.sendTokensForm.amount)) this.isInvalidAmountSendTokensForm = true; else this.isInvalidAmountSendTokensForm = false;
    }

    if (type == 'sendPowerForm') {
      this.sendPowerForm.amount = this.sendPowerForm.amount.split(',').join('.').replace(/[^0-9.]/g, "");

      if (isNaN(this.sendPowerForm.amount)) this.isInvalidAmountSendPowerForm = true; else this.isInvalidAmountSendPowerForm = false;
    }

    if (type == 'sendPowerToGolosForm') {
      let amount = this.sendPowerToGolosForm.amount;

      if (amount && amount.length > 0) this.sendPowerToGolosForm.amount = amount.split(',').join('.').replace(/[^0-9.]/g, "");

      if (isNaN(this.sendPowerToGolosForm.amount)) this.isInvalidAmountSendPowerToGolosForm = true; else this.isInvalidAmountSendPowerToGolosForm = false;
    }
  }

  sendPowerToGolos(type: string = '') {
    if (type && type.length > 0) this.sendPowerForm.currency = type;

    this.secret.key = '';

    $.magnificPopup.open({
      items: {
        src: '#p-send-power-to-golos'
      },
      //closeOnBgClick: false,
      callbacks: {
        beforeOpen: function() {  this.wrap.removeAttr('tabindex') },
        open: function() {},
        close: () => {
          this.isFirstLaunch = true;        
        }
      }
    });

    setTimeout(() => {
      if (this.slider_dom) {
        this.slider_dom.noUiSlider.destroy();
        this.slider_dom = null;
        this.slider_dom = null;
      }

      if (true) {        
        if (this.slider_dom) return;
        if (this.user_power_value == 0) return;

        this.slider_dom = document.querySelectorAll('#ui_slider_send_power_to_golos')[0];

        if (!this.slider_percentage) this.slider_percentage = 100;

        let maxValue = this.user_power_value;

        this.slider = noUiSlider.create(this.slider_dom, {
          start: this.slider_percentage,
          connect: "lower",
          range: {
            min: 0,
            max: maxValue,
          }
        });

        this.slider.on('update', (values, handle, unencoded, isTap, positions) => {
          if (this.isFirstLaunch) {
            this.isFirstLaunch = false;

            this.slider_percentage = 0;
            this.sendPowerToGolosForm.amount = null;
          } else {
            this.slider_percentage = this.user_power_value/100 * Math.round(positions[handle]);
            this.sendPowerToGolosForm.amount = +this.slider_percentage.toFixed(3);
          }
        });
      }

    }, 50);
  }

  updateSliderPercentage() {
    if (this.sendPowerToGolosForm.amount > this.user_power_value) this.sendPowerToGolosForm.amount = this.user_power_value;

    if (this.user_power_value == 0) return;

    this.slider_percentage = this.sendPowerToGolosForm.amount / (this.user_power_value/100);
    console.log(this.slider_percentage);

    this.slider_dom.noUiSlider.updateOptions({
      start: this.sendPowerToGolosForm.amount
    });
  }

  submitSendPowerToGolosForm() {
    if (this.power_to_golos_to && this.sendPowerToGolosForm.recipient.length < 1) {
      alert('Пожалуйста введите получателя');
      return;
    }

    if (this.sendPowerToGolosForm.amount <= 0) {
      alert('Пожалуйста введите количество');
      return;
    }

    if (this.secret.key.length < 5 || this.secret.login.length < 3) {
      // $.magnificPopup.close();

      setTimeout(()=>{
        this.is_show_send_power_to_golos_after_auth = true;
        this.showAuth();      
        }, 10);

      return;
    }

    let params: any = {
        login: this.secret.login,
        password: this.secret.key,
        value: +this.sendPowerToGolosForm.amount,
      };

    if (this.power_to_golos_to) {
      params.target = this.sendPowerToGolosForm.recipient;
    }

    this.postsService.sendPowerToGolos(params)
      .subscribe((data) => {
        // console.log(data);

        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.loadHistory();

        let d = new Date();
        d.setDate(d.getDate() + 7);
        let dtString = d.getDate()  + "." + (d.getMonth()+1) + "." + d.getFullYear() + ", " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

        this.power_to_golos.amount = this.sendPowerToGolosForm.amount;
        this.power_to_golos.days = 7;
        this.power_to_golos.paid_out = 0;
        this.power_to_golos.date = dtString;

        this.sendPowerToGolosForm.amount = '';
        this.sendPowerToGolosForm.to = '';
        this.sendPowerToGolosForm.recipient = '';
        this.sendPowerToGolosForm.currency= 'GOLOS';

        // alert('Успешно отправлено');

        $.magnificPopup.close();

        this.power_to_golos_to = false;

        this.is_power_to_golos_sent = true;

        this.postsService.processJWT(data);
      });
  }

  cancelGolosToPower() {
    if (this.secret.key.length < 5 || this.secret.login.length < 3) {
      // $.magnificPopup.close();

      setTimeout(()=>{
        this.is_show_send_power_to_golos_cancel_after_auth = true;
        this.showAuth();      
        }, 300);

      return;
    }

    let params: any = {
        login: this.secret.login,
        password: this.secret.key,
        value: 0,
      };

    this.postsService.sendPowerToGolos(params)
      .subscribe((data) => {
        // console.log(data);

        this.loadHistory();

        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.sendPowerToGolosForm.amount = '';
        this.sendPowerToGolosForm.to = '';
        this.sendPowerToGolosForm.recipient = '';
        this.sendPowerToGolosForm.currency= 'GOLOS';

        // alert('Успешно остановлено');

        $.magnificPopup.close();

        this.power_to_golos_to = false;
	    this.is_power_to_golos_sent = false;

        this.postsService.processJWT(data);
      });
  }

}
