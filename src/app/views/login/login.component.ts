import { Usuario } from './../../models/usuario.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: boolean = true;

  constructor(private _userService: UserService, private lg: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private utils:UtilsService) {
    this.form = lg.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigate(["/dashboard"])
    } else {
      this.loading = false;
    }
  }

  ingresar() {
    const { email, password } = this.form.value

    this._userService.login({ email, password }).subscribe((resp: any) => {
      localStorage.setItem('token', resp.token)
      this.router.navigate(["/dashboard"])
    }, (err) => {
      this._snackBar.open('Usuario y/o Contraseña Incorrectas', '0k', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3 * 1000,
      });
    }
    )
  }

}
