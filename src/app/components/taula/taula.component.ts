import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {animate, state, style, transition, trigger} from '@angular/animations';


import {Pista} from './pista';

@Component({
  selector: 'app-taula',
  templateUrl: './taula.component.html',
  styleUrls: ['./taula.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TaulaComponent implements OnInit{

  public pistes: Pista[] = new Array();

  constructor(){
  
    if (localStorage.getItem('1') === null) {
      localStorage.setItem('1',JSON.stringify(new Pista('Cendres','Paura','Punk-Rock','info')));
      localStorage.setItem('2',JSON.stringify(new Pista('Katedral Bat','Berri txarrak','Punk','info')));
      localStorage.setItem('3',JSON.stringify(new Pista('Sova när vi dör','Ringnes Ronny Kuselofte','Pop-rock','info')));
      localStorage.setItem('4',JSON.stringify(new Pista('Ales','Icarians','Rock','info')));
      localStorage.setItem('5',JSON.stringify(new Pista('La huelga','Riot propaganda','Rock','info')));
      localStorage.setItem('6',JSON.stringify(new Pista('Pare nostre que esteu a infern','Crim','Rock','info')));
      localStorage.setItem('7',JSON.stringify(new Pista('Soldadito marinero','Fito i fitipaldi','Pop espanyol','info')));
      localStorage.setItem('8',JSON.stringify(new Pista('Barrionalistas','Los chicos del maiz','Rap','info')));
      localStorage.setItem('9',JSON.stringify(new Pista('Katyusha','Coro del ejercito rojo','Clàssica','info')));
    }
  }

  ngOnInit(){
    this.recuperarTaula();
  }
  
  displayedColumns: string[] = ['nom', 'artista', 'genere','informacio',"Reproducir","preferit"];
  dataSource = new MatTableDataSource(this.pistes);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  recuperarTaula() {
    this.pistes.length = 0;
    for (let i = 1; i < 10; i++) {
      let pista = localStorage.getItem('' + i);
      this.pistes.push(JSON.parse(pista));
    }
    console.log(this.pistes);
    this.dataSource = new MatTableDataSource(this.pistes);
  }

  isFav(nom) {

    for (let i = 0; i < this.pistes.length; i++) {
      if (this.pistes[i].nom == nom) {
        this.pistes[i].fav ? this.pistes[i].fav = false : this.pistes[i].fav = true;
        let p1 = this.pistes[i];
        console.log(p1)
        localStorage.setItem(i+1+'', JSON.stringify(p1));
        break;
      }
    }
    
    this.recuperarTaula();
  }

}
