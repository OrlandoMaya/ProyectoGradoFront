
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss']
})
export class AddUsuarioComponent implements OnInit {

  rol:string[]=['ADMIN_ROL','TEC_ROL'];
  addUsuarioForm!:FormGroup;

  constructor(private fb:FormBuilder, private userService:UserService, public dialogRef: MatDialogRef<AddUsuarioComponent>) { }

  ngOnInit(): void {
    this.addUsuarioForm=this.fb.group({
      nombre:['',[Validators.required]],
      correo:['',[Validators.required]],
      password:['',[Validators.required]],
      rol:['',[Validators.required]],
    })
  }

  addStation(){
    this.userService.New(this.addUsuarioForm.value).subscribe(resp=>{
      
      this.dialogRef.close();
    })
  }

}
