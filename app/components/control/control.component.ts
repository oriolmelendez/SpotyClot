import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  animations:[
    trigger('mostrarTitol',[
      transition('void => *', [
        style({opacity:0}),
        animate(1500,style({opacity:1}))
      ])
    ])
  ]
})
export class ControlComponent implements OnInit {

  audio;
  where;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {

    if (this._route.snapshot.params.nom != undefined) {
      let nom = this._route.snapshot.params.nom.toLowerCase().replace(/\s+/g, '');
      this.where = this._route.snapshot.params.send.toLowerCase().replace(/\s+/g, '');

      this.audio = "http://localhost:8888/music/" + nom;

    }
  }

}