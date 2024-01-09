import { ChangeDetectorRef, Component } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { ProductInShoppingCart } from '../../interfaces/ProductInShoppingCart';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.less'],
})
export class ShoppingCartComponent {
  productsInCart: ProductInShoppingCart[] = [];
  numberOfProductsInCart: number = 0;
  public cost: number = 0;

  constructor(
    private cartService: CartService, 
    private orderService: OrderService,
    private appComponent: AppComponent,
    private router: Router
  ) {}

  ngOnInit() {
    this.appComponent.setShopping(true);

    this.cartService
      .all()
      .subscribe((data: ProductInShoppingCart[]) => {
        this.productsInCart = data;
        this.numberOfProductsInCart = this.calculateTotalQuantity(data);        
      });

    this.cartService
      .cost()
      .subscribe((data: number) => {
        this.cost = data;
      })
  }

  private calculateTotalQuantity(cartItems: ProductInShoppingCart[]): number {
    let baseNumber: number = 0;
    for(let index in cartItems){
      let cartItem = cartItems[index];
      baseNumber = baseNumber + Number(cartItem.quantity);
    }
    return baseNumber;
  }

  orderProducts(){
    this.router.navigate(['/order']);
  }
}
