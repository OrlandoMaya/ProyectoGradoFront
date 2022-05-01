import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidevar',
  templateUrl: './sidevar.component.html',
  styleUrls: ['./sidevar.component.scss']
})
export class SidevarComponent implements OnInit {

  correo = this.cookieService.get('correo');
  nombre = this.cookieService.get('nombre')
  rol = this.cookieService.get('rol')
  uid = this.cookieService.get('uid')

  constructor(private cookieService: CookieService) {


  }

  ngOnInit(): void {
  }

}
