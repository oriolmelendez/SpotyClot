import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes = [
    { path: "", component: AppComponent, pathMatch: "full" },
    { path: "login", component: LoginComponent, pathMatch: "full" },
    { path: "principal", component: PrincipalComponent, pathMatch: "full" },
    { path: "playlist", component: PlaylistComponent, pathMatch: "full" }
  ];
  export const routing = RouterModule.forRoot(appRoutes);