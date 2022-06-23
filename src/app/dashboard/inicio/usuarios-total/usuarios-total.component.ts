import { Component, OnInit } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { UserService } from 'src/app/services/user.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};


@Component({
  selector: 'app-usuarios-total',
  templateUrl: './usuarios-total.component.html',
  styleUrls: ['./usuarios-total.component.scss']
})
export class UsuariosTotalComponent implements OnInit {

  public chartOptions: Partial<ChartOptions> | any;
  users!:any[];
  cargando=true;

  constructor(private usuarioService:UserService) {
   
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.usuarioService.Get().subscribe((user) => {
      console.log(user)
      this.users = user.users;
      this.chartOptions = {
        series: [
          this.users.filter(
            (user) => user.rol == 'ADMIN_ROL'
          ).length,
          this.users.filter((user) => user.rol=="TEC_ROL").length,
        ],
        chart: {
          type: 'donut',
        },
        labels: ['Administradores', 'Tecnicos'],
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
