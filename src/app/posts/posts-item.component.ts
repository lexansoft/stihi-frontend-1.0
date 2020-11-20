import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HeaderService} from "../shared/services/header.service";
import {PostsService} from "../posts/posts.service";
import { BaseService } from '../shared/services/base.service';

declare var jquery:any;
declare var $ :any;
declare var noUiSlider: any;

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: []
})
export class PostsItemComponent implements OnInit, OnDestroy {
  @Input() o: any;
  @Input() current_user_votes: any;
  @Input() votes: any;
  @Input() is_blog: boolean = false;
  @Input() listTitle: string = 'new';
  @Input() page: string = '/posts/new';
  @Input() isLoading: boolean = false;
  @Input() blogId: number = 0;
  @Input() isAnnouncement: boolean = false;
  @Input() postlistelement: number = 0;
  @Input() announcementlistelement: number = 0;
  @Input() category: string = '';
  @Input() leaderTime: number = null;

  slider: any;
  slider_dom: any;
  slider_percentage: number = 0;

  user: any = {};
  userId: number = 0;
  userRole: string = 'u';
  auName: string = '';
  showOffensive: boolean = false;
  isOffensiveFilter: boolean = false;

  TODO: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderService,
    private postsService: PostsService,
  ) {}

  ngOnInit() {
    if (this.isLoading) return;

    this.user = this.postsService.getSession();
    this.userRole = this.postsService.getUserRole();
    this.userId = this.postsService.getUserId();

    this.o.unique_id = (new Date).getTime();

    if (this.user && this.user.pvt_posts_show_mode && this.user.pvt_posts_show_mode == 'S') this.showOffensive = true;

    let isOffensive: boolean = false;

    if (this.o.metadata && this.o.metadata.tags) {
      for (let i = 0; i < this.o.metadata.tags.length; i++) {
        if (['nsfw', 'мат'].indexOf(this.o.metadata.tags[i]) != -1) isOffensive = true;
      }
    }

    if (!this.showOffensive && isOffensive) {
      this.isOffensiveFilter = true;
    }

    if (this.user && this.user.n) this.auName = this.user.n;
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

        o.flag_slider_dom = document.querySelectorAll('#ui_slider_post_flag_'+o.unique_id)[0];

        if (!o.slider_percentage) o.slider_percentage = 90;

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

  getEarnings(o: any, type: number = 0) {
    return this.postsService.getEarnings(o, type);
  }

  saveFlag(o: any) {
    this.saveVote(o.id, o.slider_percentage, false);
    o.is_show_flag = false;
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

  toggleVote(o: any, newState: boolean) {
    if (this.current_user_votes && this.current_user_votes[o.id]) {
      $.magnificPopup.open({
        items: {
          src: '.p-confirm-slider-'+this.o.id
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
  }

  ngOnDestroy() {
    if (!this.slider) return;

    this.slider_dom.noUiSlider.destroy();
  }

  getUserPower(value, type) {
    return this.postsService.getUserPower(value, type);
  }

  getUserReputation(value) {
    return this.postsService.getUserReputation(value);
  }

  cancelVote(o: any) {
    this.saveVote(o.id, 0, true);

    $.magnificPopup.close({
      items: {
        src: '#p-confirm-slider-'+o.id
      }
    });
  }

  openSinglePost(id: number, returnUri: string) {
    this.headerService.openPost(id, returnUri, this.blogId, this.isAnnouncement, {category: this.category, leaderTime: this.leaderTime}, true);

    return false;
  }

  showVote(o: any, newState: boolean) {
    $.magnificPopup.close();

    setTimeout(() => {
      o.is_show_vote = newState;

      if (this.slider_dom) {
        this.slider_dom.noUiSlider.destroy();
        this.slider_dom = null;
        this.slider = null;
      }

      if (newState) {
        if (this.slider) return;

        this.slider_dom = document.querySelectorAll('#ui_slider_'+this.o.unique_id)[0];

        if (!this.slider_percentage || this.slider_percentage < 1) {
          this.slider_percentage = 100;
          let percentage: number = parseInt(localStorage.getItem('last_vote_percentage_post'));
          if (percentage > 0) this.slider_percentage = percentage;
        }

        this.slider = noUiSlider.create(this.slider_dom, {
          start: this.slider_percentage,
          connect: "lower",
          range: {
            min: 0,
            max: 100
          }
        });

        this.slider.on('update', (values, handle, unencoded, isTap, positions) => {
          this.slider_percentage = Math.round(positions[handle]);
        });
      }
    }, 50);
  }

  saveVote(id: number = null, percentage: number = null, direction: boolean = null) {
    if (id == null) id = this.o.id;
    if (percentage == null) percentage = this.slider_percentage;
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

        if (percentage > 0) localStorage.setItem('last_vote_percentage_post', String(percentage));

        this.o.is_show_vote = false;

        this.headerService.eventPostListChanged({noscroll: true});

        this.headerService.eventProfileChanged();

        this.postsService.processJWT(data);
      });
  }

  banContent() {
    if (!confirm("Заблокировать?")) return;

    this.postsService.banContent({id: this.o.id})
      .subscribe((data) => {
        if (data.error && data.error.length > 0) {
          alert(data.error);
          return;
        }

        this.headerService.eventPostListChanged({noscroll: true});

        this.postsService.processJWT(data);
      });
  }
}
