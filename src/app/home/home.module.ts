import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { ProductComponent } from "./product/product.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [HomeComponent, ProductComponent],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, NoopAnimationsModule],
  exports: [HomeComponent],
})
export class HomeModule {}
