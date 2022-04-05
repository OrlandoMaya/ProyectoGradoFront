import { Component, OnInit } from '@angular/core';
import {SpiralService} from '../../services/spiral.service'

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  constructor(private _SpiralService:SpiralService) {
    _SpiralService.carga(["spiral"],'body')
  }

  ngOnInit(): void {
  }

}
