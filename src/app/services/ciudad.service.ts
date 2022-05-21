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
    return this.http.get<any>(`${environment.apiUrl}ciudad`)
  }

  GetId(idCiudad:string):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}ciudad/${idCiudad}`)
  }

  New(user:any):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}ciudad`,user)
  }

  // Actualizar(user:any):Observable<any>{
  //   return this.http.put<any>(`${environment.apiUrl}ciudad`,user)
  // }

  eliminar():Observable<any>{
    return this.http.delete<any>(`${environment.apiUrl}ciudad`)
  }
}
