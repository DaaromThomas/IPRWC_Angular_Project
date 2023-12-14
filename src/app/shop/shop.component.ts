import { Component } from '@angular/core';
import { Product } from '../interfaces/Product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.less'
})
export class ShopComponent {
  selectedScreen: string = 'product-list';


  selectedProduct!: Product;

  onProductSelected(product: any): void {
    this.selectedProduct = product;
    this.selectedScreen = 'product-details';
  }

  goBackToProductList(): void {
    this.selectedScreen = 'product-list';
  }
}
