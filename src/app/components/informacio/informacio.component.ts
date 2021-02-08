import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-informacio',
  templateUrl: './informacio.component.html',
  styleUrls: ['./informacio.component.css'],
  animations:[
    trigger('mostrarTitol',[
      transition('void => *', [
        style({opacity:0}),
        animate(1500,style({opacity:1}))
      ])
    ])
  ]
})
export class InformacioComponent implements OnInit {

  nom:string;
  informacio: string;
  genere: string;
  artista: string;
  imatge:string;


  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.nom = this._route.snapshot.params.nom;
    console.log(this.nom);
    this.dades();
  }

  dades(){
    for(let i = 1; i<10 ;i++){
      let dades = localStorage.getItem(''+i);

      let pista = JSON.parse(dades);

      if(pista.nom == this.nom){
        this.informacio = pista.info;
        this.genere = pista.genere;
        this.artista = pista.artista;
        this.imatge = "/assets/img/" + pista.artista.toLowerCase().replace(/\s+/g, '') + '.jpg';
      }

    }
  }

}
