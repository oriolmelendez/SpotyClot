import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  audio;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {

    if (this._route.snapshot.params.nom != undefined) {
      let nom = this._route.snapshot.params.nom.toLowerCase().replace(/\s+/g, '');
      console.log(nom);

      this.audio = "http://localhost:8888/music/" + nom;
     
      
    }
  }

}