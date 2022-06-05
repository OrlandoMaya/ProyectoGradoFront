import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  Get():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}usuario`)
  }

  GetId(id:string):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}usuario/${id}`)
  }

  New(user:any):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}usuario`,user)
  }

  Actualizar(user:any,idUsuario:string):Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}usuario/${idUsuario}`,user)
  }

  login(user:any):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}usuario/login`,user)
  }

  eliminar(id:string):Observable<any>{
    return this.http.delete<any>(`${environment.apiUrl}usuario/${id}`)
  }
}
