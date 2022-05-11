import { Component, OnInit } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};
@Component({
  selector: 'app-prec',
  templateUrl: './prec.component.html',
  styleUrls: ['./prec.component.scss']
})
export class PrecComponent implements OnInit {

  ngOnInit(): void {
  }
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "ESP8266-1",
          data: [162.4,  83.21,  183.6,  162.4,  83.21,  183.6, 0],
        },
        {
          name: "ESP8266-2",
          data: [111, 132, 145, 132, 134, 152, 141]
        }
      ],
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },

      title: {
        text: "Precipitaciones",
        align: 'center',
        style: {
          fontSize:  '18px',
          fontWeight:  'bold',
          //color:  'rgba(255, 255, 255, 0.8)'
        },
      },
      labels: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z"
      ],
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };
  }
}
