import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estacion } from '../models/estacion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http:HttpClient) { }

  Get(Estacion:any):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}estacion`,Estacion)
  }

  GetId(Estacion:any):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}estacion`,Estacion)
  }

  New(Estacion:any):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}estacion`,Estacion)
  }

  Actualizar(Estacion:any):Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}estacion`,Estacion)
  }

  eliminar(Estacion:any):Observable<any>{
    return this.http.delete<any>(`${environment.apiUrl}estacion`,Estacion)
  }
}
