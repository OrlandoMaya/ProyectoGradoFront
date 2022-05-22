import { Component, OnInit } from '@angular/core';
import { Estacion } from 'src/app/models/estacion.model';
import {FormControl} from '@angular/forms';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})

export class ReportesComponent implements OnInit {

  constructor(private _station: StationService) { }

  Station = new FormControl(); // va pa'l hijo

  StationList!: Estacion[];//arreglar despues

  ngOnInit(): void {
    this._station.Get().subscribe(value => {
      console.log(value.estaciones)
      this.StationList = value.estaciones;//.map((estacion:Estacion) => estacion.nombre);
    })
    this.Station.valueChanges.subscribe(values => {
    } )
  }

}
