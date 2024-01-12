import { Component } from '@angular/core';
import { Product } from '../interfaces/Product';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {
  public allProducts: Product[] = [];
  public productsInHomeScreen: Product[] = [];
  private numberOfProductsOnHomeScreen = 5;
  private selectedIndices: number[] = [];

  constructor(private productService: ProductServiceService) {}

  ngOnInit() {
    this.productService.all().subscribe((products) => {
      this.allProducts = products;
      this.updateProductsOnHomeScreen();
    });
  }

  private updateProductsOnHomeScreen() {
    this.productsInHomeScreen = [];
    this.selectedIndices = [];
    for (let i = 0; i < this.numberOfProductsOnHomeScreen; i++) {
      const index = this.getRandomNumber(this.allProducts.length);
      const product: Product = this.allProducts[index];
      this.productsInHomeScreen.push(product);
      this.selectedIndices.push(index);
    }
  }

  private getRandomNumber(maxNumber: number): number {
    let randomNumber: number;
    do {
      randomNumber = Math.floor(Math.random() * maxNumber);
    } while (this.selectedIndices.includes(randomNumber));

    return randomNumber;
  }
}
