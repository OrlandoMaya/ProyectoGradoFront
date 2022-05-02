import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../material/material.module';
import { ApexModule } from '../apex/apex.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { NivelAguaComponent } from './reportes/nivel-agua/nivel-agua.component';
import { VelAguaComponent } from './reportes/vel-agua/vel-agua.component';
import { TempComponent } from './reportes/temp/temp.component';
import { HumComponent } from './reportes/hum/hum.component';
import { PrecComponent } from './reportes/prec/prec.component';
import { SidevarComponent } from './sidevar/sidevar.component';
import { MapsComponent } from './reportes/maps/maps.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    UsuariosComponent,
    ReportesComponent,
    NivelAguaComponent,
    VelAguaComponent,
    TempComponent,
    HumComponent,
    PrecComponent,
    SidevarComponent,
    MapsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ApexModule,
    GoogleMapsModule,
  ]
})
export class DashboardModule { }
