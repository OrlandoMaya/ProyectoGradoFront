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
import { sidebarComponent } from './sidebar/sidebar.component';
import { MapsComponent } from './reportes/maps/maps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { EstacionesComponent } from './estaciones/estaciones.component';
import { AddEstacionComponent } from './estaciones/add-estacion/add-estacion.component';
import { AddUsuarioComponent } from './usuarios/add-usuario/add-usuario.component';
import { UpdateEstacionComponent } from './estaciones/update-estacion/update-estacion.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { AddMantenimientoComponent } from './mantenimiento/add-mantenimiento/add-mantenimiento.component';
import { UpdateUsuarioComponent } from './usuarios/update-usuario/update-usuario.component';
import { FallasComponent } from './inicio/fallas/fallas.component';
import { EstacionesTotalComponent } from './inicio/estaciones-total/estaciones-total.component';
import { UsuariosTotalComponent } from './inicio/usuarios-total/usuarios-total.component';


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
    sidebarComponent,
    MapsComponent,
    EstacionesComponent,
    AddEstacionComponent,
    AddUsuarioComponent,
    UpdateEstacionComponent,
    MantenimientoComponent,
    AddMantenimientoComponent,
    UpdateUsuarioComponent,
    FallasComponent,
    EstacionesTotalComponent,
    UsuariosTotalComponent
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
