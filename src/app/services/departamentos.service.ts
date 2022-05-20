import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  constructor(private http:HttpClient) { }

  Get():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}departamento`)
  }

  GetId(idDepartamento:string):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}departamento/${idDepartamento}`)
  }

  New(user:any):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}departamento`,user)
  }

  // Actualizar(user:any):Observable<any>{
  //   return this.http.put<any>(`${environment.apiUrl}departamento`,user)
  // }

  eliminar():Observable<any>{
    return this.http.delete<any>(`${environment.apiUrl}departamento`)
  }
}
