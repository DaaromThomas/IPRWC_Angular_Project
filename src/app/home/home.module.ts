import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, NoopAnimationsModule],
  exports: [HomeComponent],
})
export class HomeModule {}
