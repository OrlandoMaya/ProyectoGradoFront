import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { concatMap, forkJoin, merge, switchMap } from 'rxjs';
import { Estacion } from 'src/app/models/estacion.model';
import { CiudadService } from 'src/app/services/ciudad.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { EstacionService } from 'src/app/services/estacion.service';
import { AddEstacionComponent } from './add-estacion/add-estacion.component';

@Component({
  selector: 'app-estaciones',
  templateUrl: './estaciones.component.html',
  styleUrls: ['./estaciones.component.scss']
})
export class EstacionesComponent implements OnInit {

  displayedColumns:string[]=['position','nombre','estado','topic','latitud','longitud','ciudad','departamento']
  dataSource!:any[];

  constructor(public dialog: MatDialog, private estacionService:EstacionService, private departamentoService:DepartamentosService,
    private ciudadService:CiudadService) { }

  ngOnInit(): void {
    this.estacionService.Get().subscribe((info:any)=>{
      this.dataSource=info.estaciones;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEstacionComponent, {
      width: '30vw',
    });

    dialogRef.afterClosed().subscribe(result => {
      
    }); 
  }





}


