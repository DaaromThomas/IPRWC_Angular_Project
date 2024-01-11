import { NgModule } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductServiceService } from '../services/product-service.service';
import { OrderComponent } from './order.component';

@NgModule({
  declarations: [OrderComponent],
  imports: [],
  exports: [OrderComponent],
  providers: [CartService, ProductServiceService]
})
export class OrderModule {}
