import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EstacionService } from 'src/app/services/estacion.service';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-mantenimiento',
  templateUrl: './add-mantenimiento.component.html',
  styleUrls: ['./add-mantenimiento.component.scss'],
})
export class AddMantenimientoComponent implements OnInit {

  
  addMantenimientoForm!:FormGroup;
  estaciones:any;
  usuarios:any;

  constructor(
    private fb: FormBuilder,
    private estacionService: EstacionService,
    private usuarioService: UserService,
    private mantenimientoService:MantenimientoService,
    public dialogRef: MatDialogRef<AddMantenimientoComponent>
  ) {}

  ngOnInit(): void {
    this.estacionService.Get().subscribe(info=>{
      this.estaciones=info.estaciones;
    })
    this.usuarioService.Get().subscribe(info=>{
      console.log(info)
      this.usuarios=info.users;
    })
    this.addMantenimientoForm=this.fb.group({
      fechaInicio:[''],
      fechaFin:[''],
      observaciones:[''],
      idEstacion:[''],
      idUsuario:[''],
    })
  }

  addMantenimiento(){
    const mantenimiento = this.addMantenimientoForm.value;
    mantenimiento.estado="En progreso";
    this.mantenimientoService.New(mantenimiento).subscribe(resp=>{
      console.log(resp)
      this.dialogRef.close();
    })
  }
}
