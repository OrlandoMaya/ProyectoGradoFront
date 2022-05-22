import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})


export class UsuariosComponent implements OnInit {

  add:boolean;

  displayedColumns: string[] = [ 'nombre', 'email', 'rol']; // 'password', 'rol'];
  clickedRows = new Set<Usuario>();
  constructor() {
    this.add=true;
  }

  dataSource: Usuario[] = [
    { uid: '21313311', nombre: "Orlando Moncad", email: "somethings@smt.com", password: "12341234", rol: "ADMIN_ROL" },
    { uid: '243232', nombre: "Orlando Monca", email: "somethings@smt.co", password: "1234123", rol: "ADMIN_ROL" },
    { uid: '345353', nombre: "Orlando Monc", email: "somethings@smt.c", password: "123412", rol: "TEC_ROL" },
    { uid: '678', nombre: "Orlando Mon", email: "somethings@smt.", password: "123412", rol: "ADMIN_ROL" },
    { uid: '456464', nombre: "Orlando Mo", email: "somethings@smt", password: "12341", rol: "ADMIN_ROL" },
    { uid: '67887686', nombre: "Orlando M", email: "somethings@sm", password: "12341", rol: "ADMIN_ROL" },
    { uid: '345354', nombre: "Orlando", email: "somethings@s", password: "12341", rol: "TEC_ROL" },
    { uid: '3543345', nombre: "Orland", email: "somethings@", password: "1234", rol: "ADMIN_ROL" },
    { uid: '4353535', nombre: "Orlan", email: "somethings", password: "123", rol: "ADMIN_ROL" },
  ];

  ngOnInit(): void {
  }

}
