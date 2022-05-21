
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Ciudad } from 'src/app/models/ciudad.model';
import { Departamento } from 'src/app/models/departamento.model';
import { CiudadService } from 'src/app/services/ciudad.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { EstacionService } from 'src/app/services/estacion.service';

@Component({
  selector: 'app-add-estacion',
  templateUrl: './add-estacion.component.html',
  styleUrls: ['./add-estacion.component.scss']
})
export class AddEstacionComponent implements OnInit {

  options:string[]=['Operando','Desactivado','Fallando'];
  departamentos!:Departamento[];
  ciudades!:Ciudad[];
  addStationForm!:FormGroup;

  constructor(private departamentosService:DepartamentosService,
    private ciudadService:CiudadService, private fb:FormBuilder, private estacionService:EstacionService,
    public dialogRef: MatDialogRef<AddEstacionComponent>,) { }

  ngOnInit(): void {
    this.departamentosService.Get().subscribe(({departamentos}:{departamentos:Departamento[]})=>{
      this.departamentos=departamentos;
    })
    this.ciudadService.Get().subscribe(({ciudades}:{ciudades:Ciudad[]})=>{
      console.log(ciudades)
      this.ciudades=ciudades;
    })
    this.addStationForm=this.fb.group({
      nombre:[''],
      estado:[''],
      topic:[''],
      latitud:[''],
      longitud:[''],
      idDepartamento:[''],
      idCiudad:['']
    })
  }

  addStation(){
    this.estacionService.New(this.addStationForm.value).subscribe(resp=>{
      console.log(resp)
      this.dialogRef.close();
    })
  }



}
