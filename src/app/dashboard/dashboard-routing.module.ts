import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EstacionesComponent } from './estaciones/estaciones.component';
import { InicioComponent } from './inicio/inicio.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { ReportesComponent } from './reportes/reportes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, children:[
    {path:'',component: InicioComponent},
    {path:'usuarios',component: UsuariosComponent},
    {path:'reportes',component: ReportesComponent},
    {path:'estaciones',component: EstacionesComponent},
    {path:'mantenimientos',component: MantenimientoComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
