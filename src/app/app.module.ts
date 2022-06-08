import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule} from "@angular/core";

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IMqttMessage, MqttModule, IMqttServiceOptions } from 'ngx-mqtt';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MapComponent } from './views/map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { GoogleMapsModule } from '@angular/google-maps';

import { Error404Component } from './views/error404/error404.component';
import { SpiralService } from './services/spiral.service';
import { MaterialModule } from './material/material.module';
import { ApexModule } from './apex/apex.module';
import { AuthInterceptorService } from './services/interceptors/authorization-interceptor';
import { ConfirmComponent } from './shared/modals/confirm/confirm.component';
import { ToolbarComponent } from './views/map/toolbar/toolbar.component';

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
    ConfirmComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    BrowserAnimationsModule,
    HttpClientModule,
    //Material Angular
    MaterialModule,
    ApexModule,
    GoogleMapsModule
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
