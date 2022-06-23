import { Component, OnDestroy, OnInit } from '@angular/core';
import { Estacion } from 'src/app/models/estacion.model';
import { StationService } from 'src/app/services/station.service';
import { ControlService } from 'src/app/services/control.service';
import { Control } from 'src/app/models/control.model';
import { Card } from 'src/app/models/card.model';
import { ControlContainer, FormControl } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { Console } from 'console';
import { Subscription } from 'rxjs';
import { IMqttMessage, MqttService } from 'ngx-mqtt';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})

export class MapComponent implements OnInit, OnDestroy {

  Station = new FormControl(); // va pa'l hijo
  StationList!: Estacion[]; //arreglar despues
  ControlList!: Control[];
  Unico!: Control;
  subscription!: Subscription;

  ControlList2: Card[] = [{
    topic: 'ESP8266-2',
    latitud: 5.9154389,
    longitud: -73.6298115,
    nivelAlerta: 180,
    nivelPrecaucion: 162,
    humedad: 95,
    humedad2: 0,
    nivelCauce: 21.79,
    nivelCauce2: 0,
    nombre: "Rio Suarez ",
    precipitacion: 0,
    precipitacion2: 0,
    temperatura: 26.9,
    temperatura2: 0,
    velocidadCauce: 0,
    velocidadCauce2: 0,
    fecha: new Date()
  }];

  Control2!: Card;

  title = 'gmaps';

  position = {
    lat: 7.156107,
    lng: -73.088516,
  };

  constructor(
    private _station: StationService,
    private _control: ControlService,
    private _mqttService: MqttService
  ) { }

  ngOnInit(): void {

    this.getData();
    this.subscription = this._mqttService
      .observe('flowriver/#')
      .subscribe((message: IMqttMessage) => {
        console.log(message)
        this.getData();
      });
  }

  getData() {
    this._station.Get().subscribe((value) => {
      this.StationList = []
      this.StationList = value.estaciones
      //console.log(this.StationList)
      for (let i = 0; i < this.StationList.length; i++) {
        this._control.GetByStation(this.StationList[i].uid, 2).subscribe((resp: any) => {
          let f = {
            topic: this.StationList[i].topic,
            latitud: this.StationList[i].latitud,
            longitud: this.StationList[i].longitud,
            nivelAlerta: this.StationList[i].nivelAlerta,
            nivelPrecaucion: this.StationList[i].nivelPrecaucion,
            nombre: this.StationList[i].nombre,
            humedad: resp.control[0].humedad,
            temperatura: resp.control[0].temperatura,
            nivelCauce: resp.control[0].nivelCauce,
            velocidadCauce: resp.control[0].velocidadCauce,
            precipitacion: resp.control[0].precipitacion,
            humedad2: resp.control[0].humedad - resp.control[1].humedad,
            temperatura2: resp.control[0].temperatura - resp.control[1].temperatura,
            nivelCauce2: resp.control[0].nivelCauce - resp.control[1].nivelCauce,
            velocidadCauce2: resp.control[0].velocidadCauce - resp.control[1].velocidadCauce,
            precipitacion2: resp.control[0].precipitacion - resp.control[1].precipitacion,
            fecha: resp.control[0].fecha,
          }
          //console.log(f)
          this.ControlList2[i] = f
        });
      }
    });
    console.log(this.ControlList2)
  }


  //this._control.GetByStation(id, 2).subscribe((resp: any) => {console.log(resp); this.algo = resp;});

  _position(i: Card) {
    this.position = {
      lat: i.latitud,
      lng: i.longitud,
    }
    return this.position;
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
