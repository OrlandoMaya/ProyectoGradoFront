import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, ObservableInput, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastComponent } from 'src/app/shared/toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    const token: string|null = localStorage.getItem('token');
    

    if (token) {
      const request = req.clone({
        setHeaders: {
          Authorization: `${ token }`
        }
      });
      return next.handle(request).pipe(
        catchError((error)=>{
          return this.manageError(error)
        })
      );
    }
    return next.handle(req).pipe(
      catchError((error:HttpErrorResponse)=>{
        return this.manageError(error)
      })
    )

  }

  private manageError(error:any): ObservableInput<any> {
    let message;
    switch (error.status) {
      case 400:
        message = 'Bad request from server';
        break;
      case 401:
        message = 'Unauthorized';
        break;
      case 402:
        message = 'Payload is required';
        break;
      case 403:
        message = 'Forbidden';
        break;
      case 404:
        message = 'Resource Not Found';
        break;
      case 413:
        message = 'Payload too large';
        break;
      case 500:
        message = 'Internal server error';
        break;
      case 501:
        message = 'Not implemented';
        break;
      case 502:
        message = 'Bad Gateway';
        break;
      default:
        message = 'Sorry, an error has occurred';
        break;
    }
    message = error.error.body ?? message;
    this.openSnackBar(message)
    return throwError('An error has occurred');
  }

  openSnackBar(message:any) {
    this._snackBar.openFromComponent(ToastComponent, {
      duration: this.durationInSeconds * 1000,
      data:{message}
    });
  }

}