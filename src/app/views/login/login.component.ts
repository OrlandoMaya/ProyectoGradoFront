import { Usuario } from './../../models/usuario.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;

  constructor(private  _userService:UserService,private lg: FormBuilder, private _snackBar: MatSnackBar, private router:Router) {
    this.form = lg.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  ingresar() {
    const {email , password}= this.form.value

    // if (email == '0' && password == '0') {
    //   this.fakeLoading();
    //   this.form.reset();
    // } else {
    //   this.error();
    //   this.form.reset();
    // }

    this._userService.login({email,password}).subscribe((resp:any)=>{
      console.log(resp)

      //TODO:Guardar token en localstorage
    })
    

    console.log(email, password);
  }

  error() {
    this._snackBar.open('Ususario y/o Contraseña Incorrectas', '0k', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3 * 1000,
    });
  }

  fakeLoading() {
    //Cargar dashboard
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(["dashboard"])
    }, 500);
  }
}
