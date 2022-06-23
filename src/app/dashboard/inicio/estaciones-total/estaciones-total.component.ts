import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';
import { StationService } from 'src/app/services/station.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-estaciones-total',
  templateUrl: './estaciones-total.component.html',
  styleUrls: ['./estaciones-total.component.scss'],
})
export class EstacionesTotalComponent implements OnInit {
  estaciones!: any[];
  cargando: boolean = true;
  public chartOptions: Partial<ChartOptions> | any;

  constructor(private stationService: StationService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.stationService.Get().subscribe((estaciones) => {
      this.estaciones = estaciones.estaciones;
      this.chartOptions = {
        series: [
          this.estaciones.filter((estacion) => estacion.enabled).length,
          this.estaciones.filter((estacion) => !estacion.enabled).length,
        ],
        chart: {
          type: 'donut',
        },
        labels: ['Funcionando', 'Deshabilitadas'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      };
      this.cargando = false;
    });
  }
}
