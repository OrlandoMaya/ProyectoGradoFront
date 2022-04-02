import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  rol: any;// ADMIN_ROL', 'TEC_ROL'

  constructor(private ruta: ActivatedRoute) {
    this.rol = this.ruta.snapshot.paramMap.get('rol');
   }

  ngOnInit(): void {
    console.log("pasé por dashboard" + this.rol)
  }

}
