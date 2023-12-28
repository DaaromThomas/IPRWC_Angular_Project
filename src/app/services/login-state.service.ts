// login-state.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginStateService {
  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setLoggedIn(value: boolean): void {
    this.loggedInSubject.next(value);
  }

  getLoggedIn(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }
}
