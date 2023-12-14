import { Component } from '@angular/core';
import { Product } from '../interfaces/Product';
import { ProductServiceService } from '../services/product-service.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent {

  productsInShoppingCart: Product[] = [];
  numberOfProductsInCart: number = 0;

  constructor(private cartService: CartService){}

  ngOnInit(){
    this.cartService
      .all()
      .subscribe((data: Product[]) => {
        this.productsInShoppingCart = data;
        this.numberOfProductsInCart = this.productsInShoppingCart.length;
      });
  }


}
