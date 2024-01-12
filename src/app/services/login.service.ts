import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Account } from '../interfaces/Account';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL: string = "http://thomaspijper.com:8080/login";

  private account_!: Account | null;
  private account$: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {
    if (typeof sessionStorage !== 'undefined') {
      const storedAccount = sessionStorage.getItem('loggedInAccount');
      if (storedAccount) {
        this.account_ = JSON.parse(storedAccount);
        this.account$.next(this.account_);
      }
    }
  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.baseURL, body, { headers })
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }

  logout() {
    this.account_ = null;
    this.account$.next(this.account_);

    sessionStorage.removeItem('loggedInAccount');
  }

  public observeAccount(): Observable<Account | null> {
    return this.account$.asObservable();
  }

  set Saccount(account: Account) {
    this.account_ = account;
    this.account$.next(this.account_);

    sessionStorage.setItem('loggedInAccount', JSON.stringify(account));
  }

  get Gaccount() {
    return this.account_;
  }
}