import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private baseURL: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  post(URL: string, body: any){
    return this.http
      .post(this.baseURL + URL, body)
      .subscribe((data) => {
        console.log(data);
    });
  }
}
