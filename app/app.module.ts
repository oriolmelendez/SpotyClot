import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from "@angular/common/http";

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PlaylistComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,PrincipalComponent]
})
export class AppModule { }
