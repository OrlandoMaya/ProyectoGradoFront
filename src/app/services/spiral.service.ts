import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root',
})
export class SpiralService {
  constructor() {}
  carga(archivos: string[], tag: string) {
    for (let archivo of archivos) {
      let scripts = document.createElement('script');
      scripts.src = '../assets/js/' + archivo + '.js';
      let body = document.getElementsByTagName(tag)[0];
      body.appendChild(scripts);
    }
    /*
    En caso de querer usar un codigo de js
    1-Guardar en la carpeta js
    2-En el componente llamar el servicio  SpiralService
    3-Añardir al constructor:
    constructor(private _SpiralService:SpiralService) {
    _SpiralService.carga(["spiral"],'tag donde se insetará el codigo de js')
    }
    pd: de preferencia usar el tag 'body' en el componente a utilizar
    */
  }
}
