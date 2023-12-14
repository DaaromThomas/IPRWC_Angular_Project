import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: Product[] = [];
  private productsInCart$ = new Subject<Product[]>();

  constructor() { }

  public all(): Observable<Product[]> {
    return this.productsInCart$;
  }

  addToCart(product: Product) {
    this.productsInCart.push(product);
    this.productsInCart$.next(this.productsInCart);
  }
}
