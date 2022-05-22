import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ubicacion } from '../models/ubicacion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }

  Get():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}ubicacion`)
  }

  GetId(id:string):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}ubicacion/${id}`)
  }

  New(Ubicacion:any):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}ubicacion`,Ubicacion)
  }

  Actualizar(Ubicacion:any):Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}ubicacion`,Ubicacion)
  }

  eliminar(id:string):Observable<any>{
    return this.http.delete<any>(`${environment.apiUrl}ubicacion/${id}`)
  }
}
