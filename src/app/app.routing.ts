import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { ControlComponent } from './components/control/control.component';
import { TaulaComponent } from './components/taula/taula.component';
import { IniciComponent } from './components/inici/inici.component';
import { PreferitsComponent } from './components/preferits/preferits.component';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import { InformacioComponent } from './components/informacio/informacio.component';


const routes : Routes = [
    { path: "inici", component: IniciComponent},
    { path: "preferits", component: PreferitsComponent},
    { path: "biblioteca", component: TaulaComponent},
    { path: "taula", component: TaulaComponent, pathMatch: 'full'  },
    { path: "", redirectTo: "/inici", pathMatch: "full"},
    { path: "control/:nom/:send", component: ControlComponent, pathMatch: 'full'  },
    { path: "informacio/:nom", component: InformacioComponent, pathMatch: 'full'  }

];

@NgModule({
    imports: [RouterModule.forRoot(routes),CommonModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }
  