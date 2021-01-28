import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuari: string;
  password: string;

  constructor(private http: HttpClient) { }
  //constructor() { }

  validarLogin(): void{
    //console.log(this.usuari);
    //console.log(this.password);

    this.http.post('http://localhost:8888/login',{
      usuari: this.usuari,
      password: this.password
    })
  }
  

  ngOnInit(): void {
  }

}
