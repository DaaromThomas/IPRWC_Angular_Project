import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.less'
})
export class ProductDetailsComponent {
  @Input() selectedProduct!: Product;
  @Output() goBack = new EventEmitter<void>();

  goToProductsScreen(): void {
    this.goBack.emit();
  }
}
