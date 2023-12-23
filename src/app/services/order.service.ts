import { Injectable } from '@angular/core';
import { Order } from '../interfaces/Order';
import { BehaviorSubject } from 'rxjs';
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

  private saveOrder(order: Order) {
    console.log('Order to be sent:', order);
 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
 
    this.http.post(this.baseURL + "/orders", order, { headers })
      .subscribe(data => {
        console.log(data);
      });
 }
 

 public createOrder(data: ProductInShoppingCart[], customer: string): void {
  const order: Order = new Order('TestId', 'Product order', customer, data);
  console.log("Data: " + data)
  this.saveOrder(order);
}


}
