import { Component, Input } from '@angular/core';
import { Product } from '../../../interfaces/Product';
import { CartService } from '../../../services/cart.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-product-in-shop',
  templateUrl: './product-in-shop.component.html',
  styleUrl: './product-in-shop.component.less',
})
export class ProductInShopComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService){}


  deleteThisFromCart(){
    this.cartService.removeFromCart(this.product);
  }
}
