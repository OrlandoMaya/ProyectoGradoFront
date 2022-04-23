import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  constructor() { }

  H = true;
  N = true;
  P = true;
  T = true
  V = true;


  ngOnInit(): void {
  }

}
