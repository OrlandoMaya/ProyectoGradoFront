import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  user!:any;
  constructor(private utils:UtilsService) { }

  ngOnInit(): void {
    this.user=this.utils.parseJwt(localStorage.getItem('token') as string)
  }

}
