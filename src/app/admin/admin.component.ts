import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { ProductServiceService } from '../services/product-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OrderService } from '../services/order.service';
import { Order } from '../interfaces/Order';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.less'
})
export class AdminComponent {
  orders: Order[] = [];

  constructor(
    private appComponent: AppComponent,
    private productService: ProductServiceService,
    private orderService: OrderService
  ){}

  ngOnInit(){
    this.orderService.placedOrders()
      .subscribe((orders) => {
        this.orders = orders;
      });
    this.appComponent.setShopping(false);
    this.orderService.getOrders();
  }

  addProduct(name: string, costString: string, imagedata: string){
    const cost = Number(costString);
    this.productService.addProduct(name, cost, imagedata);
  }

}
