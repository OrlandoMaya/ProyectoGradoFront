import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private http:HttpClient) { }

  Get():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}usuario`)
  }

  GetId():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}usuario`)
  }

  New(user:any):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}usuario`,user)
  }

  Actualizar(user:any):Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}usuario`,user)
  }

  eliminar():Observable<any>{
    return this.http.delete<any>(`${environment.apiUrl}usuario`)
  }
}
