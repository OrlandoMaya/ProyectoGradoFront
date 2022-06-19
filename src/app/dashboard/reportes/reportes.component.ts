import { Component, OnInit } from '@angular/core';
import { Estacion } from 'src/app/models/estacion.model';
import { FormControl } from '@angular/forms';
import { StationService } from 'src/app/services/station.service';
import { ControlService } from 'src/app/services/control.service';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss'],
})
export class ReportesComponent implements OnInit {
  constructor(
    private _station: StationService,
    private _control: ControlService,
    private _mqttService: MqttService
  ) {}

  Station = new FormControl(); // va pa'l hijo
  StationSelected = [];
  StationList!: Estacion[]; //arreglar despues
  data: any[] = [];
  subscription!: Subscription;

  ngOnInit(): void {
    this._station.Get().subscribe((value) => {
      this.StationList = value.estaciones.map((estacion: Estacion) => estacion);
      console.log(this.StationList);
    });
    this.Station.valueChanges.subscribe((values) => {
      if (values.length == 0) {
        this.StationSelected = values;
        this.subscription.unsubscribe();
      } else {
        this.getData(values);
        this.subscription = this._mqttService
          .observe('flowriver/#')
          .subscribe((message: IMqttMessage) => {
            if(values.map((station:any)=>station.topic).includes(message.topic.split("/")[1])){
              this.getData(values);
            }else{
              this.subscription.unsubscribe();
            }
          });
      }
    });
  }

  getData(values: any) {
    this.data = [];
    values.forEach((station: any) => {
      this._control.GetByStation(station.uid, 10).subscribe((resp: any) => {
        //agrego datos por estación
        this.data.push({ station: station, data: resp.control });
        //Elimino repetidos
        this.data = this.data.filter((value, index) => {
          const _value = JSON.stringify(value);
          return (
            index ===
            this.data.findIndex((obj) => {
              return JSON.stringify(obj) === _value;
            })
          );
        });
        // console.log("data",this.data);
        this.StationSelected = values;
      });
    });
  }
}
