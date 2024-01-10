import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { ProductServiceService } from '../services/product-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OrderService } from '../services/order.service';
import { Order } from '../interfaces/Order';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.less'
})
export class AdminComponent {
  public productInfo: String = '';
  public orders: Order[] = [];

  constructor(
    private appComponent: AppComponent,
    private productService: ProductServiceService,
    private orderService: OrderService,
    private router: Router
  ){}

  ngAfterViewInit() {
    this.productInfo = '';
    setTimeout(() => {
      this.appComponent.setShopping(false);
    });
  }

  ngOnInit(){
    this.orderService.placedOrders()
      .subscribe((orders) => {
        this.orders = orders;
      });
    this.orderService.getOrders();
  }

  addProduct(name: string, costString: string, imagedata: string){
    const cost = Number(costString);
    this.productService.addProduct(name, cost, imagedata);
    this.productInfo = 'Product succesfully added';  
  }

  goBack() {
    this.appComponent.setShopping(true);
    this.router.navigate(['home']);
  }
}
