import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Console } from 'console';
import { concatMap, forkJoin, merge, switchMap } from 'rxjs';
import { Estacion } from 'src/app/models/estacion.model';
import { CiudadService } from 'src/app/services/ciudad.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { EstacionService } from 'src/app/services/estacion.service';
import { ConfirmComponent } from 'src/app/shared/modals/confirm/confirm.component';
import { AddEstacionComponent } from './add-estacion/add-estacion.component';
import { UpdateEstacionComponent } from './update-estacion/update-estacion.component';

@Component({
  selector: 'app-estaciones',
  templateUrl: './estaciones.component.html',
  styleUrls: ['./estaciones.component.scss'],
})
export class EstacionesComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'nombre',
    'topic',
    'nivelPrecaucion',
    'nivelAlerta',
    'latitud',
    'longitud',
    'ciudad',
    'departamento',
    'estado',
    'edit',
  ];
  dataSource!: any[];

  constructor(
    public dialog: MatDialog,
    private estacionService: EstacionService,
    private departamentoService: DepartamentosService,
    private ciudadService: CiudadService
  ) {}

  getData(){
    this.estacionService.Get().subscribe((info: any) => {
      this.dataSource = info.estaciones;
    });
  }

  ngOnInit(): void {
    this.getData()
  }

  addStation(): void {
    const dialogRef = this.dialog.open(AddEstacionComponent, {
      panelClass:"dialog-responsive",
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getData();
    });
  }

  editStation(estacion: any): void {
    const dialogRef = this.dialog.open(UpdateEstacionComponent, {
      panelClass:"dialog-responsive",
      data: estacion,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getData();
    });
  }

  changeStatus(event: MatSlideToggleChange, station: any) {
    const title = event.checked
      ? '¿Desea habilitar la estación?'
      : '¿Desea deshabilitar la estación?';
    const onAccept = event.checked ? 'Habilitar' : 'Deshabilitar';
    const dialogRef = this.dialog.open(ConfirmComponent, {
      panelClass:"dialog-responsive",
      data: {
        title,
        onRefuse: 'Cancelar',
        onAccept,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        station.enabled = event.checked;
        this.estacionService
          .Actualizar(station, station.uid)
          .subscribe((resp) => {
            this.dataSource.find((sta) => sta.uid == station.uid).enabled =
              event.checked;
          });
      } else {
        event.source.writeValue(!event.checked);
      }
    });
  }
}
