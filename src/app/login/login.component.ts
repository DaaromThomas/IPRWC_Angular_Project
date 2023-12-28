import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Account } from '../interfaces/Account';
import { RoleType } from '../interfaces/RoleType';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginStateService } from '../services/login-state.service';
import * as crypto from 'crypto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {
  loginError: boolean = false;

  constructor(
    private loginService: LoginService, 
    private router: Router,
    private appComponent: AppComponent,
    private loginStateService: LoginStateService
  ) {}

  public login(username: string, password: string): void {
    this.loginService.login(username, password)
      .subscribe(
        (response) => {
          const account: Account = response;
          this.loginStateService.setLoggedIn(true);
          this.loginService.account = account;
          if(account.role === RoleType.Customer){
            this.appComponent.setShopping(true);
            this.router.navigate(['shop']);
          }else if(account.role === RoleType.Admin){
            this.appComponent.setShopping(true);
            this.router.navigate(['cart'])
            // TODO: Navigate to admin screen
          }
        },
        (error) => {
          this.loginError = true;
        }
      );
  }
  
  

}
