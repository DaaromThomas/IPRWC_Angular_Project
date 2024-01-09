import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import { CartService } from '../services/cart.service';
import { ProductServiceService } from '../services/product-service.service';
import { FormsModule } from '@angular/forms';
import { OrderComponent } from './order.component';
import { Order } from '../interfaces/Order';

@NgModule({
  declarations: [OrderComponent],
  imports: [],
  exports: [OrderComponent],
  providers: [CartService, ProductServiceService]
})
export class OrderModule {}
