
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      nombre:[''],
      correo:[''],
      password:[''],
      rol:[''],
    })
  }

  addStation(){
    this.userService.New(this.addUsuarioForm.value).subscribe(resp=>{
      console.log(resp)
      this.dialogRef.close();
    })
  }

}
