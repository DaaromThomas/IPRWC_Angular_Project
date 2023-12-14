import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: Product[] = [];
  private productsInCart$ = new BehaviorSubject<Product[]>([]);

  constructor() { }

  public all(): Observable<Product[]> {
    return this.productsInCart$.asObservable();
  }

  addToCart(product: Product) {
    this.productsInCart.push(product);
    this.productsInCart$.next(this.productsInCart);
  }
}
