import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../interfaces/Order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: Product[] = [];
  private productsInCart$ = new BehaviorSubject<Product[]>([]);

  private costOfProducts: number = 0;
  private costOfProducts$ = new BehaviorSubject<number>(0);

  constructor() { }

  public all(): Observable<Product[]> {
    return this.productsInCart$.asObservable();
  }

  public cost(): Observable<number>{
    return this.costOfProducts$.asObservable();
  }

  addToCart(product: Product) {
    this.productsInCart.push(product);
    this.productsInCart$.next(this.productsInCart);

    this.costOfProducts += product.cost;
    this.costOfProducts$.next(this.costOfProducts);
  }

  removeFromCart(product: Product) {
    for (let index in this.productsInCart) {
        if (this.productsInCart[index] === product) {
            this.productsInCart.splice(parseInt(index), 1);
            this.costOfProducts -= product.cost;

            break;
        }
    }
    this.productsInCart$.next(this.productsInCart);
    this.costOfProducts$.next(this.costOfProducts);
  }

  public createOrder(){
    const order = new Order(1, 'TestOrder', 'TestCustomer', this.productsInCart)

  }
}
