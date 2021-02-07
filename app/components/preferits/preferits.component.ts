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

  recuperarTaula(){
    for(let i = 1; i<10;i++){
      let pista = localStorage.getItem(''+i);
      this.pistes.push(JSON.parse(pista));
    }
    console.log(this.pistes);
  }

}
