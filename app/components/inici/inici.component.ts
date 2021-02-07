import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-inici',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.css'],
  animations:[
    trigger('mostrarTitol',[
      transition('void => *', [
        style({opacity:0}),
        animate(1500,style({opacity:1}))
      ])
    ])
  ]
})
export class IniciComponent {

  constructor() { }

}
