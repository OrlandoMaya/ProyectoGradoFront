import { Component, OnInit } from '@angular/core';
import {SpiralService} from '../../services/spiral.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _SpiralService:SpiralService) {
    _SpiralService.carga(["olas"],'body')
  }

  ngOnInit(): void {
  }

}
