import { Injectable } from '@angular/core';
import { Order } from '../interfaces/Order';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [];
  private orders$ = new BehaviorSubject<Order[]>([]);
  private baseURL: string = "http://85.215.60.238:8080";


  constructor(private http: HttpClient, private cartService: CartService, private router: Router) { }

  public placedOrders(): Observable<Order[]>{
    return this.orders$.asObservable()
  }

  public saveOrder(order: Order) { 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
 
    this.cartService.emptyCart();
    this.http.post(this.baseURL + "/orders", order, { headers }).subscribe();
    this.router.navigate(['/home']);
 }

  public getOrders(){
    this.http.get(this.baseURL + "/orders")
    .subscribe(
      (data: any) => {
        this.orders = data;
        this.orders$.next(this.orders);
      },
      (error) => {
    }
  );
  }
 

  generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
