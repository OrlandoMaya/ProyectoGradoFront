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

  Get():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}departamento`)
  }

  GetId(id:string):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}departamento/${id}`)
  }

  New(Departamento:any):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}departamento`,Departamento)
  }

  Actualizar(Departamento:any):Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}departamento`,Departamento)
  }

  eliminar(id:string):Observable<any>{
    return this.http.delete<any>(`${environment.apiUrl}departamento/${id}`)
  }
}
