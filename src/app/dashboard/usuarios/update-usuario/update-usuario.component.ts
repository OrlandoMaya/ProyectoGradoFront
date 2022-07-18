import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.scss'],
})
export class UpdateUsuarioComponent implements OnInit {
  updateUsuarioForm!: FormGroup;
  rol: string[] = ['ADMIN_ROL', 'TEC_ROL'];
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public dialogRef: MatDialogRef<UpdateUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.updateUsuarioForm = this.fb.group({
      nombre: [this.data.nombre,[Validators.required]],
      rol: [this.data.rol,[Validators.required]],
    });
  }

  updateStation() {
    this.userService
      .Actualizar(this.updateUsuarioForm.value,this.data.uid)
      .subscribe((resp) => {
        this.dialogRef.close();
      });
  }
}
