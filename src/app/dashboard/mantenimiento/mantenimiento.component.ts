import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CiudadService } from 'src/app/services/ciudad.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { EstacionService } from 'src/app/services/estacion.service';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';
import { ConfirmComponent } from 'src/app/shared/modals/confirm/confirm.component';
import { AddMantenimientoComponent } from './add-mantenimiento/add-mantenimiento.component';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.scss'],
})
export class MantenimientoComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'observacion',
    'fechaInicio',
    'fechaFin',
    'estado',
    'estacion',
    'usuario',
    'opciones'
  ];
  dataSource!: any[];

  constructor(
    public dialog: MatDialog,
    private estacionService: EstacionService,
    private departamentoService: DepartamentosService,
    private ciudadService: CiudadService,
    private mantenimientoService: MantenimientoService
  ) {}

  getInfo(){
    this.mantenimientoService.Get().subscribe((info: any) => {
      this.dataSource = info.mantenimientoes;
      console.log(info);
    });
  }

  ngOnInit(): void {
    this.estacionService.Get().subscribe((info: any) => {
      console.log(info);
    });
    this.getInfo()
  }

  addMantenimiento() {
    const dialogRef = this.dialog.open(AddMantenimientoComponent, {
      width: '30vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getInfo()
    });
  }

  finalizarMantenimiento(mantenimiento: any) {
    const title = '¿Desea finalizar el mantenimiento?';
    const onAccept = 'Finalizar';
    const today = new Date();
    const dataInfo = { fechaFin: today, estado:"Finalizado" };

    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '30vw',
      data: {
        title,
        onRefuse: 'Cancelar',
        onAccept,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.mantenimientoService
          .Actualizar(dataInfo, mantenimiento.uid)
          .subscribe((resp) => {
            const manSelected=this.dataSource.find(
              (man) => man.uid == mantenimiento.uid
            )
            manSelected.estado="Finalizado";
            manSelected.fechaFin=new Date();
            console.log(resp);
          });
      }
    });
  }

  eliminarMantenimiento(mantenimiento: any) {
    const title = '¿Desea eliminar el informe de mantenimiento?';
    const onAccept = 'Eliminar';
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '30vw',
      data: {
        title,
        onRefuse: 'Cancelar',
        onAccept,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.mantenimientoService
          .eliminar(mantenimiento.uid)
          .subscribe((resp) => {
            this.dataSource = this.dataSource.filter(
              (man) => man.uid != mantenimiento.uid
            );
            console.log(resp);
          });
      }
    });
  }
}
