import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.less'
})
export class ProductComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService){}


  deleteThisFromCart(){
    this.cartService.removeFromCart(this.product);
  }


}
