import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    NgApexchartsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,

    NgApexchartsModule
  ]
})
export class ApexModule { }
