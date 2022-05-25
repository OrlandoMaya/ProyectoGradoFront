import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
} from 'ng-apexcharts';
import { ControlService } from 'src/app/services/control.service';

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
  selector: 'app-nivel-agua',
  templateUrl: './nivel-agua.component.html',
  styleUrls: ['./nivel-agua.component.scss'],
})
export class NivelAguaComponent implements OnInit {
  ngOnInit(): void {

    const dataInfo=this.item.map((station) => {
      return {
        name: station.station.nombre,
        data: station.data.map((info: any) => {
          return info.nivelCauce;
        }),
      };
    })


    this.chartOptions = {
      series:
      dataInfo,
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },

      title: {
        text: 'Nivel del Rio',
        align: 'center',
        style: {
          fontSize: '18px',
          fontWeight: 'bold',
          //color:  'rgba(255, 255, 255, 0.8)'
        },
      },
      labels: 
      this.item[0].data.map((data:any)=>{return data.fecha})
      // [
      //   '2018-09-19T00:00:00.000Z',
      //   '2018-09-19T01:30:00.000Z',
      //   '2018-09-19T02:30:00.000Z',
      //   '2018-09-19T03:30:00.000Z',
      //   '2018-09-19T04:30:00.000Z',
      //   '2018-09-19T05:30:00.000Z',
      //   '2018-09-19T06:30:00.000Z',
      // ]
      ,
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: 'left',
      },
    };
  }

  @Input() item!: any[];

  public chartOptions: Partial<ChartOptions> | any;

  constructor(private _control: ControlService) {
    
  }
}
