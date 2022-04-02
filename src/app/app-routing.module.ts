import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './views/error404/error404.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MapComponent } from './views/map/map.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', redirectTo: 'login', pathMatch: 'full' },//login
  { path: '', redirectTo: 'login', pathMatch: 'full' },//login
  { path: '404', component: Error404Component },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(x => x.DashboardModule) },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
