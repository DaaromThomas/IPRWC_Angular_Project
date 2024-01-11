import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';
import { RoleType } from '../interfaces/RoleType';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    const account = this.loginService.Gaccount;

    if (account && account.role === RoleType.Admin) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
