import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estacion } from '../models/estacion.model';

@Injectable({
  providedIn: 'root'
})
export class EstacionService {

  constructor(private http:HttpClient) { }

  Get():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}estacion`)
  }

  GetId(idEstacion:string):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}estacion/${idEstacion}`)
  }

  New(estacion:Estacion):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}estacion`,estacion)
  }

  Actualizar(estacion:any,idEstacion:string):Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}estacion/${idEstacion}`,estacion)
  }

  eliminar(idEstacion:string):Observable<any>{
    return this.http.delete<any>(`${environment.apiUrl}estacion/${idEstacion}`)
  }

  GetUbicacion(idUbicacion:string):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}ubicacion/${idUbicacion}`)
  }
}
