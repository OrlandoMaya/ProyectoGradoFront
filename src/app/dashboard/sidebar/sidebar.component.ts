import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class sidebarComponent implements OnInit {

  // correo = localStorage.getItem('correo');
  // nombre = localStorage.getItem('nombre')
  // rol = localStorage.getItem('rol')
  // uid = localStorage.getItem('uid')

  user:any;
  constructor(private utils:UtilsService) {

  }

  ngOnInit(): void {
    this.user=this.utils.parseJwt(localStorage.getItem('token') as string)

  }

}
