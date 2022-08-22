import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { ConfirmComponent } from 'src/app/shared/modals/confirm/confirm.component';
import { UpdateUsuarioComponent } from './update-usuario/update-usuario.component';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})


export class UsuariosComponent implements OnInit {

  add: boolean;

  User = new FormControl(); // va pa'l hijo

  UserList!: Usuario[];//arreglar despues

  rol!:string;

  constructor(private _User: UserService, public dialog: MatDialog, private utils:UtilsService) {
    this.add = true;
    this.rol=this.utils.parseJwt(localStorage.getItem('token') as string).rol
  }

  getData(){
    this._User.Get().subscribe(value => {
      this.UserList = value.users;//.map((estacion:Estacion) => estacion.nombre);
    })
  }

  ngOnInit(): void {
    this.getData();
  }

  displayedColumns: string[] = ['rol', 'nombre', 'email', 'uid']; // 'password', 'rol'];
  clickedRows = new Set<Usuario>();

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUsuarioComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });

  }

  EliminarUsuario(usuario:any){
    const title = '¿Desea eliminar el usuario?';
    const onAccept = 'Eliminar';
    const dialogRef = this.dialog.open(ConfirmComponent, {
      panelClass:"dialog-responsive",
      data: {
        title,
        onRefuse: 'Cancelar',
        onAccept,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._User.eliminar(usuario.uid)
          .subscribe((resp) => {
            this.UserList = this.UserList.filter(
              (usr) => usr.uid != usuario.uid
            );
          });
      }
    });
  }

  editUsuario(usuario:any){
    const dialogRef = this.dialog.open(UpdateUsuarioComponent, {
      width: '300px',
      data:usuario
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getData()
    });
  }

}
