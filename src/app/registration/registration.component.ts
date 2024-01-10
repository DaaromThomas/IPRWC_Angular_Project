// registration.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent {
  registrationError: boolean = false;

  constructor(
    private registrationService: RegistrationService,
    private router: Router,
    private appComponent: AppComponent
  ) {}


  register(username: string, password: string): void {
    this.registrationService.register(username, password)
      .subscribe(
        () => {
          // Registration successful, navigate to login or any other page
          this.router.navigate(['/login']);
        },
        (error) => {
          this.registrationError = true;
        }
      );
  }
}
