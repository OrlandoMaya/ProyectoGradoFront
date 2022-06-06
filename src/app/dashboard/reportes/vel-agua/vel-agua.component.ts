import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";

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
  selector: 'app-vel-agua',
  templateUrl: './vel-agua.component.html',
  styleUrls: ['./vel-agua.component.scss']
})
export class VelAguaComponent implements OnInit, OnChanges {

  @Input()  item!: any[];
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.item.length > 0) {
      const dataInfo = this.item.map((station) => {
        return {
          name: station.station.nombre,
          data: station.data.map((info: any) => {
            return info.velocidadCauce;
          }),
        };
      });
      this.chartOptions = {
        series: dataInfo,
        chart: {
          type: "line",
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 5,
          curve: "smooth",
          dashArray: 8
        },
  
        title: {
          text: "Velocidad del Agua",
          align: 'center',
          style: {
            fontSize:  '18px',
            fontWeight:  'bold',
            //color:  'rgba(255, 255, 255, 0.8)'
          },
        },
        labels: this.item[0].data.map((data:any)=>{return data.fecha}),
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

  ngOnInit(): void {

  }

  
}
