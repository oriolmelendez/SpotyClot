import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition, group,query,keyframes} from '@angular/animations';
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
    ]),
    trigger('mostraLogo',[
      state('void',style({
        transform:'translateX(-50%)',
        opacity:0
      })),
      transition(':enter',[animate(1500,style({
        transform:'translateX(0)',
        opacity:1
      }))
      ])
    ])
  ] 
})
export class IniciComponent {

  constructor() { }

}
