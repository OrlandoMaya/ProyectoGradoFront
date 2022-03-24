import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IMqttMessage, MqttModule, IMqttServiceOptions } from 'ngx-mqtt';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MapComponent } from './views/map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Error404Component } from './views/error404/error404.component';
import { SpiralService } from './spiral.service';
import { MaterialModule } from './material/material.module';

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
    //Material Angular
    MaterialModule,
  ],
  providers: [SpiralService],
  bootstrap: [AppComponent],
})
export class AppModule {}
