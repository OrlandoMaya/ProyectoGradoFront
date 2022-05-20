import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad.model';
import { Departamento } from 'src/app/models/departamento.model';
import { CiudadService } from 'src/app/services/ciudad.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';

@Component({
  selector: 'app-add-estacion',
  templateUrl: './add-estacion.component.html',
  styleUrls: ['./add-estacion.component.scss']
})
export class AddEstacionComponent implements OnInit {

  options:string[]=['Operando','Desactivado','Fallando'];
  departamentos!:Departamento[];
  ciudades!:Ciudad[];
  constructor(private departamentosService:DepartamentosService,
    private ciudadService:CiudadService) { }

  ngOnInit(): void {
    this.departamentosService.Get().subscribe((resp)=>{
      console.log(resp)
    })
    this.ciudadService.Get().subscribe((resp)=>{
      console.log(resp)
    })
  }

  addStation(){

  }



}
