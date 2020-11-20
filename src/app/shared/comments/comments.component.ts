import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PostsService} from "../../posts/posts.service";
import {HeaderService} from "../services/header.service";

import * as MobileEditor from '@ckeditor/ckeditor5-build-inline-mobile';

declare var jquery:any;
declare var $ :any;
declare var noUiSlider: any;

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: []
})
export class CommentsComponent implements OnInit {
  public Editor = MobileEditor;

  @Input() comments;
  @Input() level;
  @Input() postId;
  @Input() current_user_votes: any;
  @Input() votes;
  @Input() returnUri;

  percentages = [];
  vote_post_percentage: number = 100;

  user: any = {};
  userId: number = 0;
  userRole: string = 'u';
  auName: string = '';

  comment: any = {
    content: {
      parent_author: '',
      parent_permlink: '',
      author: '',
      permlink: '',
      body: '',
      parent_id: 0,
    }
  };

  isNewCommentVisible: boolean = false;

  TODO: boolean = false;

  isSubscribedToUser: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private headerService: HeaderService,
  ) {
    this.percentages = [];
    for (let i =0; i < 11; i++) {
      this.percentages.push(10*i);
    }
  }

  ngOnInit() {
    this.user = this.postsService.getSession();
    this.userRole = this.postsService.getUserRole();
    this.userId = this.postsService.getUserId();

    let users = JSON.parse(localStorage.getItem('user_subscriptions'));

    for (let i = 0; i < this.comments.length; i++) {
      this.comments[i].unique_id = (new Date).getTime() + Math.floor(Math.random() * (99999999 - 1000 + 1)) + 1000;

      if (!this.comments[i].editor || this.comments[i].editor == '') this.comments[i].editor = 'markdown';

      if (this.comments[i].editor != 'markdown') {
        this.comments[i].body = this.comments[i].body.replace(/(?:\r\n|\r|\n)/g, '');
        this.comments[i].input_mode = true;
      } else {
        this.comments[i].input_mode = false;
      }

      this.comments[i].body = this.headerService.preProcessBody(this.comments[i].body, this.comments[i].editor);

      if (users && users[this.comments[i].user.id]) {
        this.comments[i].isSubscribedToUser = true;
      } else this.comments[i].isSubscribedToUser = false;
    }

    if (this.user && this.user.n) this.auName = this.user.n;
  }


  subscribe(o) {
    this.postsService.userSubscribe({user_id: o.user.id})
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        o.isSubscribedToUser = true;

        this.postsService.refreshUsersSubscriptions(this.userId);

        this.postsService.processJWT(data);
      });
  }

  unSubscribe(o) {
    this.postsService.userUnsubscribe({user_id: o.user.id})
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        o.isSubscribedToUser = false;

        this.postsService.refreshUsersSubscriptions(this.userId);

        this.postsService.processJWT(data);
      });
  }

  toggleNewComment(o: any) {
    o.comment_body = '';

    o.is_comment_edit_form_visible = false;
    o.is_comment_form_visible = !o.is_comment_form_visible;
    o.is_comment_edit_form_visible = false;

    // o.comment_body = '@'+o.user.name+' ';
  }

  toggleEditComment(o: any) {
    o.is_comment_form_visible = false;
    o.is_comment_edit_form_visible = !o.is_comment_edit_form_visible;

    this.loadRawComment(o);
  }

  loadRawComment(o: any) {
    this.postsService.getComment({id: o.id, raw: true})
      .subscribe((data) => {

        o.body = data.content.body;

        this.postsService.processJWT(data);
      });
  }

  saveComment(o: any, isEdit: boolean = false) {
    if (o.is_sending) return;

    o.is_sending = true;

    this.comment.content.body = o.comment_body;
    this.comment.content.author = this.postsService.getSession().n;
    this.comment.content.parent_author = o.author;
    this.comment.content.parent_permlink = o.permlink;
    this.comment.content.parent_id = o.id;

    if (!this.comment.content.metadata) this.comment.content.metadata = {};
    if (o.input_mode) this.comment.content.metadata.editor = 'html'; else this.comment.content.metadata.editor = 'markdown';

    if (isEdit) {
      this.comment.content_id = +o.id;
      this.comment.content.parent_id = o.parent_id;
      this.comment.content.author = o.author;
      this.comment.content.body = o.body;

      this.postsService.updateComment(this.comment)
        .subscribe((data) => {
          if (data.error && data.error.length > 0) {

            delete o.is_sending;

            alert(data.error);
            return;
          }

          this.headerService.eventCommentChanged();

          this.cancelComment(o);

          this.postsService.processJWT(data);
        });
    } else {
      this.postsService.articelsSaveComment(this.comment)
        .subscribe((data) => {
          if (data.error && data.error.length > 0) {

            delete o.is_sending;

            alert(data.error);
            return;
          }

          this.headerService.eventCommentChanged();

          this.cancelComment(o);

          this.postsService.processJWT(data);
        });
    }
  }

  cancelComment(o: any) {
    delete o.is_sending;

    o.is_comment_form_visible = false;
    o.is_comment_edit_form_visible = false;

    o.comment_body = '';
    o.comment_title = '';
  }

  deleteContent(id: number) {
    if (!confirm("Удалить?")) return;

    this.postsService.deleteContent({id: +id})
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.headerService.eventCommentChanged();

        this.postsService.processJWT(data);
      });
  }

  getEarnings(o: any, type: number = 0) {
    return this.postsService.getEarnings(o, type);
  }

  banContent(id: number) {
    if (!confirm("Блокировать?")) return;

    this.postsService.banContent({id: +id})
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.headerService.eventCommentChanged();

        this.postsService.processJWT(data);
      });
  }

  showVote(o: any, newState: boolean) {
    setTimeout(() => {
      o.is_show_vote = newState;

      if (o.vote_slider_dom) {
        o.vote_slider_dom.noUiSlider.destroy();
        o.vote_slider_dom = null;
        o.vote_slider = null;
      }

      if (newState) {
        if (o.vote_slider) return;

        o.vote_slider_dom = document.querySelectorAll('#ui_slider_comment_vote_'+o.unique_id)[0];

        if (!o.vote_slider_percentage || o.vote_slider_percentage < 1) {
          o.vote_slider_percentage = 100;
          let percentage: number = parseInt(localStorage.getItem('last_vote_percentage_comment'));
          if (percentage > 0) o.vote_slider_percentage = percentage;
        }

        o.vote_slider = noUiSlider.create(o.vote_slider_dom, {
          start: o.vote_slider_percentage,
          connect: "lower",
          range: {
            min: 0,
            max: 100
          }
        });

        o.vote_slider.on('update', (values, handle, unencoded, isTap, positions) => {
          o.vote_slider_percentage = Math.round(positions[handle]);
        });
      }
    }, 50);
  }

  cancelVote(o: any) {
    this.saveVote(o.id, 0, true);

    $.modal.close();
  }

  toggleFlag(o: any, newState: boolean) {
    setTimeout(() => {
      o.is_show_flag = false;

      o.is_show_flag = newState;

      if (o.flag_slider_dom) {
        o.flag_slider_dom.noUiSlider.destroy();
        o.flag_slider_dom = null;
        o.flag_slider = null;
      }

      if (newState) {
        if (o.flag_slider_dom) return;

        o.flag_slider_dom = document.querySelectorAll('#ui_slider_post_flag_comment'+o.id)[0];

        if (!o.slider_percentage) {
          o.slider_percentage = 90;
          let percentage: number = parseInt(localStorage.getItem('last_vote_percentage_comment'));
          if (percentage > 0) o.slider_percentage = percentage;
        }

        o.flag_slider = noUiSlider.create(o.flag_slider_dom, {
          start: o.slider_percentage,
          connect: "lower",
          range: {
            min: 0,
            max: 100
          }
        });

        o.flag_slider.on('update', (values, handle, unencoded, isTap, positions) => {
          o.slider_percentage = Math.round(positions[handle]);
        });
      }

    }, 50);
  }

  toggleVote(o: any, newState: boolean) {
    if (this.current_user_votes && this.current_user_votes[o.id]) {
      setTimeout(() => {
        $('.p-confirm-slider-vote-'+o.id+':first').modal({
          closeText: '',     // Text content for the close <a> tag.
          closeClass: '',         // Add additional class(es) to the close <a> tag.
          showClose: false,        // Shows a (X) icon/link in the top-right corner
          modalClass: "modal",    // CSS class added to the element being displayed in the modal.
          showSpinner: false,      // Enable/disable the default spinner during AJAX requests.
          fadeDuration: null,     // Number of milliseconds the fade transition takes (null means no transition)
          fadeDelay: 1.0          // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
        });
        $('.p-confirm-slider-vote-'+o.id+':first').on($.modal.AFTER_CLOSE, function(event, modal) {
          setTimeout(() => {
            $('.p-confirm-slider-vote-'+o.id+':first').hide();
          }, 200);
        });
      }, 200);

      return false;
    }

    this.showVote(o, newState);

  /*
    if (this.current_user_votes && this.current_user_votes[o.id]) {
      $.magnificPopup.open({
        items: {
          src: '.p-confirm-slider-vote-'+o.id
        },
        callbacks: {
          open: function() {},
          close: () => {
            //
          }
        }
      });

      return false;
    }

    this.showVote(o, newState);
   */

  }

  toggleVotes(o: any, newState: boolean) {
    if (o.votes_count == 0) return;

    setTimeout(() => {
      o.is_show_votes = newState;
    }, 50);
  }

  togglePrice(o: any, newState: boolean) {
    setTimeout(() => {
      o.is_show_price = newState;
    }, 50);
  }

  toggleProfile(o: any, newState: boolean) {
    setTimeout(() => {
      o.is_show_profile = false;

      o.is_show_profile = newState;
    }, 50);
  }


  saveFlag(o: any) {
    this.saveVote(o.id, o.slider_percentage, false);
    o.is_show_flag = false;
  }

  saveCommentVote(o: any) {
    this.saveVote(o.id, o.vote_slider_percentage, true);
    o.is_show_vote = false;
  }

  saveVote(id: number = null, percentage: number = null, direction: boolean = null) {
    // if (percentage == null) percentage = this.slider_percentage;
    if (direction == null) direction = true;

    let tmp = {
      vote: {
        content_id: id,
        weight: percentage * 100,
      }
    };

    if (!direction) tmp.vote.weight = tmp.vote.weight * -1;

    this.postsService.voteSave(tmp)
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        if (percentage > 0) localStorage.setItem('last_vote_percentage_comment', String(percentage));

        this.headerService.eventCommentChanged();

        this.postsService.processJWT(data);
      });
  }

  getUserPower(value, type) {
    return this.postsService.getUserPower(value, type);
  }

  getUserReputation(value) {
    return this.postsService.getUserReputation(value);
  }

  openComments(id: number, postId: number, returnUri: string = '') {
    this.headerService.openComment(id, postId, returnUri);

    return false;
  }

  trackByFn(index, item) {
    return item.id;
  }

  onEditorClick() {
    $('.ck.ck-button.ck-block-toolbar-button').css('margin-left', '6px');
  }
}
