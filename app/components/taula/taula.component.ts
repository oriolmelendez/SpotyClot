import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {Pista} from './pista';

/* const ELEMENT_DATA: Pista[] = [
  {nom: 'Cendres', artista: 'Paüra', genere: 'Punk-rock'},
  {nom: 'Katedral Bat', artista: 'Berri txarrak', genere: 'Punk'},
  {nom: 'Sova när vi dör,', artista: 'Ringnes-Ronny & Kuselofte', genere: 'Pop-rock'},
  {nom: 'Ales', artista: 'Icarians', genere: 'Rock'},
  {nom: 'La huelga', artista: 'Riot propaganda', genere: 'Rock'},
  {nom: 'Pare nostre que esteu a infern', artista: 'Crim', genere: 'Rock'},
  {nom: 'Soldadito marinero', artista: 'Taburete', genere: 'Pop espanyol'},
  {nom: 'Barrionalistas', artista: 'Los chicos del maiz', genere: 'Rap'},
  {nom: 'Katyusha', artista: 'Coro del ejercito rojo', genere: 'Clàssica'},
]; */

@Component({
  selector: 'app-taula',
  templateUrl: './taula.component.html',
  styleUrls: ['./taula.component.css']
})
export class TaulaComponent {
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
  
  displayedColumns: string[] = ['nom', 'artista', 'genere',"reproduïr"];
  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getSong(canço){
    console.log(canço);
  }

}
