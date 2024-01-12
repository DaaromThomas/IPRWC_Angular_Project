import { Component } from '@angular/core';
import { Order } from '../interfaces/Order';
import { CartService } from '../services/cart.service';
import { ProductInShoppingCart } from '../interfaces/ProductInShoppingCart';
import { Account } from '../interfaces/Account';
import { LoginService } from '../services/login.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.less'
})
export class OrderComponent {
  private products: ProductInShoppingCart[] = [];
  private account!: Account | null;

  constructor(
    private cartService: CartService,
    private loginService: LoginService,
    private orderService: OrderService
    ){}

  ngOnInit(){
    this.cartService.all()
      .subscribe((products) => {
        this.products = products;
    })
    this.loginService.observeAccount()
      .subscribe((account) => {
        this.account = account;
    });
  }

  submitOrder(customerName: String, email: String, address: String) {
    let username = 'Anonymous';
    if (this.account && this.account.name) {
      username = this.account.name;
    }
    const order: Order = new Order(
      this.generateUUID(),
      'Product Order',
      username,
      this.products,
      customerName,
      email,
      address
    );
    this.orderService.saveOrder(order);
  }

  generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
