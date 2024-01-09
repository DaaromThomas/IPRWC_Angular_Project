import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Account } from '../interfaces/Account';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL: string = 'http://localhost:8080';

  private account_!: Account;
  private account$: Subject<Account> = new Subject<Account>;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.baseURL + '/login', body, { headers })
      .pipe(
        catchError(error => {
          console.error('Error during login:', error);
          return throwError(error);
        })
      );

    
  }

  public observeAccount(): Observable<Account>{
    return this.account$.asObservable();
  }

  set Saccount(account: Account){
    this.account_ = account;
    this.account$.next(this.account_);
  }

  get Gaccount(){
    return this.account_;
  }
}
