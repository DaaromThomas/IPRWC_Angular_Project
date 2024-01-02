import { Injectable } from '@angular/core';
import { Order } from '../interfaces/Order';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/Product';
import { RequestService } from './request.service';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ProductInShoppingCart } from '../interfaces/ProductInShoppingCart';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [];
  private orders$ = new BehaviorSubject<Order[]>([]);
  private baseURL: string = "http://localhost:8080";


  constructor(private requestService: RequestService, private http: HttpClient) { }

  public placedOrders(): Observable<Order[]>{
    return this.orders$.asObservable()
  }

  private saveOrder(order: Order) {
    console.log('Order to be sent:', order);
 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
 
    this.http.post(this.baseURL + "/orders", order, { headers }).subscribe();
 }

  public getOrders(){
    this.http.get(this.baseURL + "/orders")
    .subscribe(
      (data: any) => {
        this.orders = data;
        this.orders$.next(this.orders);
      },
      (error) => {
        console.error('Error creating order:', error);
    }
  );
  }
 

 public createOrder(data: ProductInShoppingCart[], customer: string): void {
  const order: Order = new Order(this.generateUUID(), 'Product order', customer, data);
  console.log("createOrder(): Data: ", data)
  console.log("createOrder(): Order: ", order);
  this.saveOrder(order);
}

generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}


}
