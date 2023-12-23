import { Component } from '@angular/core';
import { Product } from '../interfaces/Product';
import { CartService } from '../services/cart.service';
import { AppComponent } from '../app.component';
import { ProductInShoppingCart } from '../interfaces/ProductInShoppingCart';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent {

  productsInShoppingCart: ProductInShoppingCart[] = [];
  numberOfProductsInCart: number = 0;

  constructor(private cartService: CartService, private appComponent: AppComponent){}

  ngOnInit() {
    this.cartService
      .all()
      .subscribe((data: ProductInShoppingCart[]) => {
        this.productsInShoppingCart = data;
  
        this.numberOfProductsInCart = this.calculateTotalQuantity(this.productsInShoppingCart);
      });
  }
  
  private calculateTotalQuantity(cartItems: ProductInShoppingCart[]): number {
    let baseNumber: number = 0;
    for(let index in cartItems){
      let cartItem = cartItems[index];
      baseNumber = baseNumber + Number(cartItem.quantity);
    }
    return baseNumber;
  }

  setLogin(){
    this.appComponent.setShopping(false);
  }
}
