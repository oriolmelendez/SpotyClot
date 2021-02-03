import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { LoginComponent } from './components/login/login.component';
import { ControlComponent } from './components/control/control.component';
import { TaulaComponent } from './components/taula/taula.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PlaylistComponent,
    LoginComponent,
    ControlComponent,
    TaulaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent, PrincipalComponent]
})
export class AppModule { }
