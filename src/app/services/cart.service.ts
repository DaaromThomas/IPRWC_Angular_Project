import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Product } from '../interfaces/Product';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../interfaces/Order';
import { ProductInShoppingCart } from '../interfaces/ProductInShoppingCart';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: ProductInShoppingCart[] = [];
  private productsInCart$ = new BehaviorSubject<ProductInShoppingCart[]>([]);

  private costOfProducts: number = 0;
  private costOfProducts$ = new BehaviorSubject<number>(0);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        this.productsInCart = JSON.parse(storedCart);
        this.productsInCart$.next(this.productsInCart);
      }
    }
  }

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
    localStorage.setItem('cart', JSON.stringify(this.productsInCart));
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

    localStorage.setItem('cart', JSON.stringify(this.productsInCart));
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

    localStorage.setItem('cart', JSON.stringify(this.productsInCart));
  }

  emptyCart() {
    this.productsInCart = [];
    this.costOfProducts = 0;
  
    this.productsInCart$.next(this.productsInCart);
    this.costOfProducts$.next(this.costOfProducts);
  
    localStorage.removeItem('cart');
  }

}
