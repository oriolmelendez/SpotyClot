import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {Pista} from '../taula/pista';

@Component({
  selector: 'app-preferits',
  templateUrl: './preferits.component.html',
  styleUrls: ['./preferits.component.css']
})
export class PreferitsComponent implements OnInit{

  public pistes: Pista[] = new Array();

  displayedColumns: string[] = ['nom', 'artista', 'genere',"Reproducir", "favorit"];
  dataSource = new MatTableDataSource(this.pistes);

  ngOnInit(){
    this.recuperarTaula();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  recuperarTaula() {
    this.pistes.length = 0;
    for (let i = 1; i < 10; i++) {
      let pista = localStorage.getItem('' + i);
      let pp = JSON.parse(pista);
      if(pp.fav)
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
