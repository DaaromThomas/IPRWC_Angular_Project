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
  public cost: number = 0;

  constructor(private cartService: CartService) {
    
  }

  ngOnInit() {
    this.cartService
      .all()
      .subscribe((data: Product[]) => {
        this.productsInCart = data;
        console.log(data);
      });

    this.cartService
      .cost()
      .subscribe((data: number) => {
        this.cost = data;
      })
  }
}
