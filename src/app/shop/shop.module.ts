import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import { ShopComponent } from './shop.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartService } from '../services/cart.service';
import { ProductServiceService } from '../services/product-service.service';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [ShopComponent, ProductListComponent, ProductDetailsComponent, ShoppingCartComponent, ProductComponent],
  imports: [CommonModule, BrowserModule],
  exports: [ShopComponent],
  providers: [CartService, ProductServiceService]
})
export class ShopModule {}
