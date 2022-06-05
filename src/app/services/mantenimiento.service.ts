import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mantenimiento } from '../models/mantenimiento.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  constructor(private http:HttpClient) { }

  Get():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}mantenimiento`)
  }

  GetId(idMantenimiento:string):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}mantenimiento/${idMantenimiento}`)
  }

  New(matenimiento:Mantenimiento):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}mantenimiento`,matenimiento)
  }

  Actualizar(matenimiento:any,idMantenimiento:string):Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}mantenimiento/${idMantenimiento}`,matenimiento)
  }

  eliminar(idMantenimiento:string):Observable<any>{
    return this.http.delete<any>(`${environment.apiUrl}mantenimiento/${idMantenimiento}`)
  }
}
