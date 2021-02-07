import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {Pista} from './pista';

@Component({
  selector: 'app-taula',
  templateUrl: './taula.component.html',
  styleUrls: ['./taula.component.css']
})
export class TaulaComponent implements OnInit{

  public pistes: Pista[] = new Array();

  constructor(){
    localStorage.setItem('1',JSON.stringify(new Pista('Cendres','Paüra','Punk-Rock')));
    localStorage.setItem('2',JSON.stringify(new Pista('Katedral Bat','Berri txarrak','Punk')));
    localStorage.setItem('3',JSON.stringify(new Pista('Sova när vi dör','Ringnes-Ronny & Kuselofte','Pop-rock')));
    localStorage.setItem('4',JSON.stringify(new Pista('Ales','Icarians','Rock')));
    localStorage.setItem('5',JSON.stringify(new Pista('La huelga','Riot propaganda','Rock')));
    localStorage.setItem('6',JSON.stringify(new Pista('Pare nostre que esteu a infern','Crim','Rock')));
    localStorage.setItem('7',JSON.stringify(new Pista('Soldadito marinero','Taburete','Pop espanyol')));
    localStorage.setItem('8',JSON.stringify(new Pista('Barrionalistas','Los chicos del maiz','Rap')));
    localStorage.setItem('9',JSON.stringify(new Pista('Katyusha','Coro del ejercito rojo','Clàssica')));
  }

  ngOnInit(){
    this.recuperarTaula();
  }
  
  displayedColumns: string[] = ['nom', 'artista', 'genere',"Reproducir", "favorit"];
  dataSource = new MatTableDataSource(this.pistes);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  recuperarTaula(){
    for(let i = 1; i<10;i++){
      let pista = localStorage.getItem(''+i);
      this.pistes.push(JSON.parse(pista));
    }
    console.log(this.pistes);
  }

}
