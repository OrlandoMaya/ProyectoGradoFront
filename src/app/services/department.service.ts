import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from '../models/departamento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  Get(Departamento:any):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}departamento`,Departamento)
  }

  GetId(Departamento:any):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}departamento`,Departamento)
  }

  New(Departamento:any):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}departamento`,Departamento)
  }

  Actualizar(Departamento:any):Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}departamento`,Departamento)
  }

  eliminar(Departamento:any):Observable<any>{
    return this.http.delete<any>(`${environment.apiUrl}departamento`,Departamento)
  }
}
