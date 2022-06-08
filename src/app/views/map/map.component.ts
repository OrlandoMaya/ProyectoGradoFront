import { Component, OnInit } from "@angular/core";
import { Estacion } from "src/app/models/estacion.model";
import { StationService } from 'src/app/services/station.service';
import { ControlService } from "src/app/services/control.service";
import { Control } from "src/app/models/control.model";
import { ControlContainer, FormControl } from "@angular/forms";
import { MaterialModule } from '../../material/material.module';
import { Console } from "console";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

  Station = new FormControl(); // va pa'l hijo
  StationSelected = [];
  StationList!: Estacion[]; //arreglar despues
  data: any[] = [];
  ControlList!: Control[];
  Unico!: Control;


  constructor(private _station: StationService, private _control: ControlService) {
  }

  ngOnInit(): void {
    this._station.Get().subscribe((value) => {
      this.StationList = value.estaciones.map((estacion: Estacion) => estacion);
      console.log(this.StationList);
    });

    this._control.Get().subscribe((resp: any) => {
      this.ControlList = resp.controles.map((control: Control) => control);
      //this.ControlList2 = this.ControlList;
      //this._datos(this.ControlList[this.ControlList.length - 1].idEstacion)
      //console.log(this._datos(this.ControlList[this.ControlList.length - 1].idEstacion))
    });
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

  _datosFec(id: string) {
    try {
      for (let i = this.ControlList.length - 1; i > 0; i--) {
        if (this.ControlList[i].idEstacion == id) {
          this.Unico = this.ControlList[i]
        }
      }
    } catch (error) {
      return 0;
    }
    if (this.Unico.fecha == null) {
      return 'N/A';
    } else {
      return this.Unico.fecha;
    }
  }

  _datosHumedad(id: string) {
    try {
      for (let i = this.ControlList.length - 1; i > 0; i--) {
        if (this.ControlList[i].idEstacion == id) {
          this.Unico = this.ControlList[i]
        }
      }
    } catch (error) {
      return 0;
    }
    if (this.Unico.humedad == null) {
      return 'N/A';
    } else {
      return this.Unico.humedad;
    }
  }

  _datosNivCau(id: string) {
    try {
      for (let i = this.ControlList.length - 1; i > 0; i--) {
        if (this.ControlList[i].idEstacion == id) {
          this.Unico = this.ControlList[i]
        }
      }
    } catch (error) {
      return 0;
    }
    if (this.Unico.nivelCauce == null) {
      return 'N/A';
    } else {
      return (this.Unico.nivelCauce / 100).toFixed(2);
    }
  }

  _datosPrec(id: string) {
    try {
      for (let i = this.ControlList.length - 1; i > 0; i--) {
        if (this.ControlList[i].idEstacion == id) {
          this.Unico = this.ControlList[i]
        }
      }
    } catch (error) {
      return 0;
    }
    if (this.Unico.precipitacion == null) {
      return 'N/A';
    } else {
      return this.Unico.precipitacion;
    }
  }

  _datosTemp(id: string) {
    try {
      for (let i = this.ControlList.length - 1; i > 0; i--) {
        if (this.ControlList[i].idEstacion == id) {
          this.Unico = this.ControlList[i]
        }
      }
    } catch (error) {
      return 0;
    }
    if (this.Unico.temperatura == null) {
      return 'N/A';
    } else {
      return this.Unico.temperatura;
    }
  }

  _datosVelCau(id: string) {
    try {
      for (let i = this.ControlList.length - 1; i > 0; i--) {
        if (this.ControlList[i].idEstacion == id) {
          this.Unico = this.ControlList[i]
        }
      }
    } catch (error) {
      return 0;
    }
    if (this.Unico.velocidadCauce == null) {
      return 'N/A';
    } else {
      return this.Unico.velocidadCauce;
    }
  }

}
