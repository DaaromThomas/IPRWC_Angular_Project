import { ChangeDetectorRef, Component } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.less']
})
export class ShoppingCartComponent {
  productsInCart: Product[] = [];

  constructor(private cartService: CartService) {
    
  }

  ngOnInit() {
    this.cartService
      .all()
      .subscribe((data: Product[]) => {
        this.productsInCart = data;
        console.log(this.productsInCart[0]);
      });
  }
}
