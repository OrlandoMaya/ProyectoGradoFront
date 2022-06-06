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
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss']
})
export class TempComponent implements OnInit,OnChanges {

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
            return info.temperatura;
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
          curve: "smooth"
        },
        title: {
          text: "Temperatura",
          align: 'center',
          style: {
            fontSize:  '18px',
            fontWeight:  'bold',
            //color:  'rgba(255, 255, 255, 0.8)'
          },
        },
        labels: this.item[0].data.map((data:any)=>{return data.fecha}),
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: ["#b3fbff","#8cffd9"],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          }
        },
        markers: {
          size: 4,
          colors: ["#5BD1D7", "#00E396"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7
          }
        },
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
