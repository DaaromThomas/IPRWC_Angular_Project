import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.less'
})
export class ProductDetailsComponent {
  @Input() selectedProduct!: Product;
  @Output() goBack = new EventEmitter<void>();

  private productId: any;

  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.paramMap.subscribe( paramMap => {
      this.productId = paramMap.get('id');
  })
  }

  goToProductsScreen(): void {
    this.goBack.emit();
  }
}
