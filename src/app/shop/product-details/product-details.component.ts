import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.less'
})
export class ProductDetailsComponent {
  @Input() selectedProduct!: Product;
  @Output() goBack = new EventEmitter<void>();

  private productId: any;

  constructor(private activatedRoute: ActivatedRoute, private appComponent: AppComponent){}

  ngOnInit(){
    this.appComponent.setShopping(true);

    this.activatedRoute.paramMap.subscribe( paramMap => {
      this.productId = paramMap.get('id');
  })
  }

  goToProductsScreen(): void {
    this.goBack.emit();
  }
}
