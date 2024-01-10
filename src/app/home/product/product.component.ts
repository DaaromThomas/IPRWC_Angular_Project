import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { CartService } from '../../services/cart.service';
import { DetailsService } from '../../shop/product-details/details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.less'
})
export class ProductComponent {
  @Input() product!: Product;

  constructor(
    private cartService: CartService,
    private router: Router,
    private detailsService: DetailsService
    ){}


  deleteThisFromCart(){
    this.cartService.removeFromCart(this.product);
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

  selectProduct(product: Product): void {
    this.detailsService.product = product;
    this.router.navigate(['/details']);
  }


}
