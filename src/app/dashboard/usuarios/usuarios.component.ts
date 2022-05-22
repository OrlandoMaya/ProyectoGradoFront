import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})


export class UsuariosComponent implements OnInit {

  add: boolean;

  User = new FormControl(); // va pa'l hijo

  UserList!: Usuario[];//arreglar despues

  constructor(private _User: UserService) {
    this.add = true;
  }

  ngOnInit(): void {
    this._User.Get().subscribe(value => {
      console.log(value.users)
      this.UserList = value.users;//.map((estacion:Estacion) => estacion.nombre);
    })
  }

  displayedColumns: string[] = [ 'rol','nombre',  'email']; // 'password', 'rol'];
  clickedRows = new Set<Usuario>();


}
