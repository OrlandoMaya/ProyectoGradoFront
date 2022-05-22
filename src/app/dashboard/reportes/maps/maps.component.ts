import { Component, OnInit, Input } from "@angular/core";
import { LocationService } from "src/app/services/location.service";
import { Ubicacion } from "src/app/models/ubicacion.model";
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  form: FormGroup;

  ngOnInit(): void {
  }

  constructor(private _location: LocationService, private lg: FormBuilder, private cookieService: CookieService) {
    this.form = lg.group({
      authorization: [this.cookieService.get('token'), AuthenticatorResponse],
    });
  }

  @Input() item!: any[];

  title = 'gmaps';
  position2 = {
    lat: 7.156107,
    lng: -73.088516
  }
  position3 = {
    lat: (this.position2.lat),
    lng: (this.position2.lng),
  }

  position() {
    const Authorization = this.form.value
    this._location.Get( ).subscribe(value => {
      let icono = value.ubicacion.map((ubicacion: Ubicacion) => ubicacion.idCiudad);
      console.log(icono)
    })

  }

}
