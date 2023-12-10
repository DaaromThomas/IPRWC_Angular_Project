import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import { ShopComponent } from './shop.component';

@NgModule({
  declarations: [ShopComponent],
  imports: [CommonModule, BrowserModule],
  exports: [ShopComponent],
})
export class ShopModule {}
