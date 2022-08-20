import { Component, OnInit } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-fallas',
  templateUrl: './fallas.component.html',
  styleUrls: ['./fallas.component.scss'],
})
export class FallasComponent implements OnInit {
  public chartOptions: Partial<ChartOptions> | any;
  cargando=true;
  mantenimientos!: any[];
  constructor(private mantenimientoService: MantenimientoService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.mantenimientoService.Get().subscribe((mantenimientos) => {
      this.mantenimientos = mantenimientos.mantenimientoes;
      this.chartOptions = {
        series: [
          this.mantenimientos.filter(
            (mantenimiento) => mantenimiento.estado == 'Finalizado'
          ).length,
          this.mantenimientos.filter((mantenimiento) => mantenimiento.estado=="En progreso").length,
        ],
        chart: {
          type: 'donut',
        },
        labels: ['Finalizados', 'En Progreso'],
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
      this.cargando=false;
    });
  }
}
