import { Component, OnInit, Input } from "@angular/core";
import { FormControl } from '@angular/forms';
import { LocationService } from 'src/app/services/location.service';
import { Ubicacion } from 'src/app/models/ubicacion.model';
import { Estacion } from "src/app/models/estacion.model";


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {


  Location = new FormControl(); // va pa'l hijo

  LocationList!: Ubicacion[];//arreglar despues

  @Input() item!: Estacion[];

  constructor(private _location: LocationService) {
  }

  ngOnInit(): void {
    this._location.Get().subscribe(value => {
      console.log(value.ubicaciones)
      this.LocationList = value.ubicaciones;//.map((estacion:Estacion) => estacion.nombre);
    })
  }

  title = 'gmaps';
  position = {
    lat: 7.156107,
    lng: -73.088516
  }
  label2 = {
    color: 'black',
    text: 'ESP8266-1'
  }

  _position(id: string) {
    for (let i of this.LocationList) {
      if (i.id == id) {
        this.position = {
          lat: i.latitud,
          lng: i.longitud,
        }
      }
    }
    return this.position;
  }

}
