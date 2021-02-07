import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { ControlComponent } from './components/control/control.component';
import { TaulaComponent } from './components/taula/taula.component';
import { IniciComponent } from './components/inici/inici.component';
import { PreferitsComponent } from './components/preferits/preferits.component';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';


const routes : Routes = [
    { path: "inici", component: IniciComponent},
    { path: "preferits", component: PreferitsComponent},
    { path: "biblioteca", component: TaulaComponent},
    { path: "", redirectTo: "/inici", pathMatch: "full"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes),CommonModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }
  