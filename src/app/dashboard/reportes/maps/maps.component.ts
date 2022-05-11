import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  title1 = 'gmaps';
  position1 = {
    lat: 7.155745,
    lng: -73.092464
  }
  label1 = {
    color: 'white',
    text: 'ESP8266-1'
  }
  title2 = 'gmaps';
  position2 = {
    lat: 7.156107,
    lng: -73.088516
  }
  label2 = {
    color: 'white',
    text: 'ESP8266-1'
  }

  position3 = {
    lat: (this.position1.lat+this.position2.lat)/2,
    lng: (this.position1.lng+this.position2.lng)/2,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
