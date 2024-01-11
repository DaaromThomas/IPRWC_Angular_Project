import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ProductServiceService } from '../../services/product-service.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent {
  @Output() productSelected = new EventEmitter<Product>();

  products: Product[] = [
  ];

  constructor(
    private productService: ProductServiceService,
    private appComponent: AppComponent
  ){}

  ngOnInit(){
    this.appComponent.setShopping(true);
    this.productService.getAllProducts();
    this.productService
    .all()
    .subscribe((data: Product[]) => {
      this.products = data;
    })
  }
}
