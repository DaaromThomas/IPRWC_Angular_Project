import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private loginService: LoginService){}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    if (this.loginService.Gaccount !== null && this.loginService.Gaccount !== undefined) {
        const accountId = this.loginService.Gaccount.id;
      const modifiedRequest = request.clone({
        setHeaders: {
          'X-Account-Id': accountId,
        },
      });

      return next.handle(modifiedRequest);
    } else {
      return next.handle(request);
    }
  }
}
