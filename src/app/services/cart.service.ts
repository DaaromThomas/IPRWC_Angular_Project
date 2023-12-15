import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';
import { BehaviorSubject, Observable } from 'rxjs';

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

  removeFromCart(product: Product) {
    for (let index in this.productsInCart) {
        if (this.productsInCart[index] === product) {
            this.productsInCart.splice(parseInt(index), 1);
        }
    }
    this.productsInCart$.next(this.productsInCart);
}
}
