import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class sidebarComponent implements OnInit {

  correo = this.cookieService.get('correo');
  nombre = this.cookieService.get('nombre')
  rol = this.cookieService.get('rol')
  uid = this.cookieService.get('uid')

  constructor(private cookieService: CookieService) {

  }

  ngOnInit(): void {
  }

}
