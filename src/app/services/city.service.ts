import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ciudad } from '../models/ciudad.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient) { }

  Get():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}ciudad`)
  }

  GetId(id:string):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}ciudad/${id}`)
  }

  New(Ciudad:any):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}ciudad`,Ciudad)
  }

  Actualizar(Ciudad:any):Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}ciudad`,Ciudad)
  }

  eliminar(id:string):Observable<any>{
    return this.http.delete<any>(`${environment.apiUrl}ciudad/${id}`)
  }
}
