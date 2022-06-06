import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { switchMap } from 'rxjs';
import { Ciudad } from 'src/app/models/ciudad.model';
import { Departamento } from 'src/app/models/departamento.model';
import { CiudadService } from 'src/app/services/ciudad.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { EstacionService } from 'src/app/services/estacion.service';

@Component({
  selector: 'app-update-estacion',
  templateUrl: './update-estacion.component.html',
  styleUrls: ['./update-estacion.component.scss'],
})
export class UpdateEstacionComponent implements OnInit {
  options: string[] = ['Operando', 'Desactivado', 'Fallando'];
  departamentos!: Departamento[];
  ciudades!: Ciudad[];
  updateStationForm!: FormGroup;
  loading: boolean = true;

  constructor(
    private departamentosService: DepartamentosService,
    private ciudadService: CiudadService,
    private fb: FormBuilder,
    private estacionService: EstacionService,
    public dialogRef: MatDialogRef<UpdateEstacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.departamentosService
      .Get()
      .pipe(
        switchMap(({ departamentos }: { departamentos: Departamento[] }) => {
          this.departamentos = departamentos;
          return this.ciudadService.Get();
        })
      )
      .subscribe(({ ciudades }: { ciudades: Ciudad[] }) => {
        console.log(ciudades);
        this.ciudades = ciudades;
        this.updateStationForm = this.fb.group({
          nombre: [this.data.nombre],
          topic: [this.data.topic],
          latitud: [this.data.latitud],
          longitud: [this.data.longitud],
          nivelPrecaucion: [this.data.nivelPrecaucion],
          nivelAlerta: [this.data.nivelAlerta],
          idDepartamento: [
            this.departamentos.find(
              (dep) => dep.nombre === this.data.departamento
            )?.uid,
          ],

          idCiudad: [
            this.ciudades.find((ciu) => ciu.nombre === this.data.ciudad)?.uid,
          ],
        });
        this.loading = false;
      });
  }

  updateStation() {
    this.estacionService
      .Actualizar(this.updateStationForm.value, this.data.uid)
      .subscribe((resp) => {
        console.log(resp);
        this.dialogRef.close();
      });
  }
}
