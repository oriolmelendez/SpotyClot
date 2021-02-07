import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-preferits',
  templateUrl: './preferits.component.html',
  styleUrls: ['./preferits.component.css']
})
export class PreferitsComponent{
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
