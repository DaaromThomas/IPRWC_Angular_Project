import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../interfaces/Order';
import { ProductInShoppingCart } from '../interfaces/ProductInShoppingCart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: ProductInShoppingCart[] = [];
  private productsInCart$ = new BehaviorSubject<ProductInShoppingCart[]>([]);

  private costOfProducts: number = 0;
  private costOfProducts$ = new BehaviorSubject<number>(0);

  constructor() { }

  public all(): Observable<ProductInShoppingCart[]> {
    return this.productsInCart$.asObservable();
  }

  public cost(): Observable<number>{
    return this.costOfProducts$.asObservable();
  }

  addToCart(product: Product) {
    const itemInCart = this.productsInCart.find((cartItem) => cartItem.product === product);

    if(itemInCart){
      itemInCart.quantity ++;
    }else{
      this.productsInCart.push(new ProductInShoppingCart(product, 1))
    }

    this.costOfProducts += product.cost;

    this.productsInCart$.next(this.productsInCart);
    this.costOfProducts$.next(this.costOfProducts);
  }

  changeQuantity(product: Product, newQuantity: number){
    const itemInCart = this.productsInCart.find((cartItem) => cartItem.product === product);
    const oldQuantity = itemInCart!.quantity;

    const cost = itemInCart!.product.cost;
    const oldValue = oldQuantity * cost;
    const newValue = newQuantity * cost;

    this.costOfProducts -= oldValue;
    itemInCart!.quantity = newQuantity;
    this.costOfProducts += newValue;

    this.productsInCart$.next(this.productsInCart);
    this.costOfProducts$.next(this.costOfProducts);
  }

  removeFromCart(product: Product) {
    const index = this.productsInCart.findIndex((cartItem) => cartItem.product === product);
    const productInCart = this.productsInCart[index];
    productInCart.quantity--;

    if(productInCart.quantity <= 0){
      this.productsInCart.splice(index, 1);
    }
    
    this.costOfProducts -= product.cost;

    this.productsInCart$.next(this.productsInCart);
    this.costOfProducts$.next(this.costOfProducts);
  }

  public createOrder(){
    // const order = new Order(1, 'TestOrder', 'TestCustomer', this.productsInCart)

  }
}
