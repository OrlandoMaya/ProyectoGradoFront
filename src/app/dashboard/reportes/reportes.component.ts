import { Component, OnInit } from '@angular/core';
import { Estacion } from 'src/app/models/estacion.model';
import {FormControl} from '@angular/forms';
import { StationService } from 'src/app/services/station.service';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})

export class ReportesComponent implements OnInit {

  constructor(private _station: StationService, private _control:ControlService) { }

  Station = new FormControl(); // va pa'l hijo
  StationSelected=[]
  StationList!: Estacion[];//arreglar despues
  data:any[]=[];


  ngOnInit(): void {
    this._station.Get().subscribe(value => {
      this.StationList = value.estaciones.map((estacion:Estacion) => estacion);
      console.log(this.StationList)
    })
    this.Station.valueChanges.subscribe(values => {
      values.forEach((station:any)=>{
        this._control.GetByStation(station.uid,10).subscribe(
          (resp)=>{
            console.log(resp)
            this.data.push({station:station,data:resp.control})
            this.StationSelected=values;
          }
        )
      })
    } )

    
  }

}
