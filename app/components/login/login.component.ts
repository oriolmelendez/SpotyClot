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

  validarLogin(usuari:string, password: string): void{
    var xhr = new XMLHttpRequest(); 
 
    /* xhr.onreadystatechange = function(){ 
        if (this.readyState === 4) { 
            document.getElementById("consulta").innerHTML =  this.response; 
        } 
    }  */
    
    let dades = usuari + ',' + password;

    xhr.open("POST","http://localhost:8888/login",true);
    xhr.send(dades);
  }
  

  ngOnInit(): void {
  }

}
