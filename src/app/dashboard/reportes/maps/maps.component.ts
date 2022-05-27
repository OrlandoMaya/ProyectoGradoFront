import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Estacion } from 'src/app/models/estacion.model';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit, OnChanges {
  @Input() item!: any;
  title = 'gmaps';
  // positions = [
  //   {ubication:{
  //     lat: 7.156107,
  //     lng: -73.088516,
  //   },label:""},
  // ];
  positions!:any[];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.getPositions();
  }

  // _position(id: string) {
  //     for (let i of this.item.map((station:any)=>{return station.station})) {
  //       if (i.uid == id) {
  //         this.position = {
  //           lat: i.latitud,
  //           lng: i.longitud,
  //         }
  //       }
  //     }
  //     return this.position;
  //   }

  getPositions() {
    this.positions = this.item.map((station: any) => {
      return {
        ubication: {
          lat: station.station.latitud,
          lng: station.station.longitud,
        },
        label: station.station.nombre,
      };
    });
    console.log(this.positions)
  }
}
