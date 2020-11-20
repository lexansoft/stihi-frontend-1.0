import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';

declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isAuth: boolean = false;

  mode: number = 0;
  is_recovery_code_sent: boolean = false;

  constructor(
    private renderer: Renderer2,
    // private usersService: UsersService,
  ) {
    	window.onscroll = function()
    	{
  		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	
      if(scrollTop >= 150) {
      if (!$('.scroll_button_container').is(':visible')) $('.scroll_button_container').fadeIn();
      } else {
        if ($('.scroll_button_container').is(':visible')) $('.scroll_button_container').fadeOut();
	    }
      };
  }

  scrollTop() {
	if ($('#p-page').is(':visible')) document.getElementById("p-page").scrollIntoView({ block: 'start',  behavior: 'smooth' });
    else $('html, body').animate({scrollTop:0},'250');
  }

  onActivate(event) {}
}
