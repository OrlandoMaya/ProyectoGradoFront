import { Component, OnInit } from "@angular/core";
import { Estacion } from "src/app/models/estacion.model";
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  StationList!: Estacion[];

  constructor(private _station: StationService) {
  }

  ngOnInit(): void {
    this._station.Get().subscribe(value => {
      this.StationList = value.estaciones.map((estacion:Estacion) => estacion);
      console.log(this.StationList)
    })
  }

  title = 'gmaps';
  position = {
    lat: 7.156107,
    lng: -73.088516
  }

  _position(id: string) {
    for (let i of this.StationList) {
      if (i.uid == id) {
        this.position = {
          lat: i.latitud,
          lng: i.longitud,
        }
      }
    }
    return this.position;
  }

}
