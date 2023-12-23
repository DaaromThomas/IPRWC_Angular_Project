import { Component, Input } from '@angular/core';
import { Product } from '../../../interfaces/Product';
import { CartService } from '../../../services/cart.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ProductInShoppingCart } from '../../../interfaces/ProductInShoppingCart';

@Component({
  selector: 'app-product-in-shop',
  templateUrl: './product-in-shop.component.html',
  styleUrl: './product-in-shop.component.less',
})
export class ProductInShopComponent {
  @Input() productData!: ProductInShoppingCart;
  public product!: Product;
  public quantity!: number;
  
  numberArray: number[] = [];

  constructor(private cartService: CartService){}

  ngOnInit(){
    this.fillNumberArray();
    this.product = this.productData.product;
    this.quantity = this.productData.quantity;
  }

  changeQuantity(newQuantity: number){
    this.cartService.changeQuantity(this.product, newQuantity);
  }
  
  deleteThisFromCart(){
    this.cartService.removeFromCart(this.productData.product);
    this.quantity -= 1;
  }

  fillNumberArray(){
    for (let i = 1; i <= 100; i++) {
      this.numberArray.push(i);
    }
  }
}
