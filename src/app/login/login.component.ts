import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { RoleType } from '../interfaces/RoleType';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginStateService } from '../services/login-state.service';
import { NavbarComponent } from '../navbar/navbar.component';

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
    private navbarComponent: NavbarComponent,
    private loginStateService: LoginStateService
  ) {}

  public login(username: string, password: string): void {
    this.loginService.login(username, password)
      .subscribe(
        (account) => {
          this.loginStateService.setLoggedIn(true);
          this.loginService.Saccount = account;
          if (account.role === RoleType.Customer) {
            this.appComponent.setShopping(true);
            this.router.navigate(['shop']);
          } else if (account.role === RoleType.Admin) {
            this.navbarComponent.isAdmin = true;
            this.appComponent.setShopping(false);
            this.router.navigate(['admin']);
          }
        },
        (error) => {
          this.loginError = true;
        }
      );
  }
  
  

}
