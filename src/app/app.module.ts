import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Component, ViewChild } from "@angular/core";

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IMqttMessage, MqttModule, IMqttServiceOptions } from 'ngx-mqtt';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MapComponent } from './views/map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { NgApexchartsModule } from 'ng-apexcharts';

import { Error404Component } from './views/error404/error404.component';
import { SpiralService } from './services/spiral.service';
import { MaterialModule } from './material/material.module';
import { AuthInterceptorService } from './services/interceptors/authorization-interceptor';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'localhost',
  connectTimeout: 4000,
  clientId: 'emqx',
  keepalive: 60,
  port: 8083,
  path: '/mqtt',
  clean: true,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MapComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    BrowserAnimationsModule,
    HttpClientModule,
    NgApexchartsModule,
    //Material Angular
    MaterialModule,
  ],
  providers: [CookieService,
    SpiralService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]

})
export class AppModule {
}
