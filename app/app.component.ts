import { Component } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /* animations:[
    trigger('fadeIn',[
      transition('void => *', [
        style({opacity:0}),
        animate(1000,style({opacity:1}))
      ])
    ])
  ] */
})
export class AppComponent {
  title = 'Spotyclot';
}
