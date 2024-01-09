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
    
    if (this.loginService.account !== null && this.loginService.account !== undefined) {
        const accountId = this.loginService.account.id;
      const modifiedRequest = request.clone({
        setHeaders: {
          'X-Account-Id': accountId,
        },
      });

      console.log(accountId);

      return next.handle(modifiedRequest);
    } else {
      return next.handle(request);
    }
  }
}
