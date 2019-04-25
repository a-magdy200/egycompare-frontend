import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {AuthService} from './services/auth.service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

 intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   if (this.authService.isLoggedIn) {
     const token = this.authService.getAccessToken();
     request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
   }
   let headers = new HttpHeaders();
   if (this.authService.isLoggedIn) {
     const token = this.authService.getAccessToken();
     headers = headers.set('Authorization', 'Bearer ' + token);
   }
   headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
   headers = headers.set('Accept', 'application/json');
   const req = request.clone({headers});
   return next.handle(req);
 }
}
