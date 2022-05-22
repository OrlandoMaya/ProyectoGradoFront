import { Component, OnInit, Input } from "@angular/core";
import { FormControl } from '@angular/forms';
import { Estacion } from "src/app/models/estacion.model";


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  @Input() item!: Estacion[];

  constructor() {
  }

  ngOnInit(): void {

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
    for (let i of this.item) {
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
