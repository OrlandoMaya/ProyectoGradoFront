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

  constructor(private lg: FormBuilder, private _snackBar: MatSnackBar, private router:Router) {
    this.form = lg.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  ingresar() {
    const usuario = this.form.value.user;
    const password = this.form.value.password;

    if (usuario == '0' && password == '0') {
      this.fakeLoading();
      this.form.reset();
    } else {
      this.error();
      this.form.reset();
    }

    console.log(usuario, password);
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
