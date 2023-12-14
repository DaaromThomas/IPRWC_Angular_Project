import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.less'
})
export class ProductListComponent {
  @Output() productSelected = new EventEmitter<Product>();

  products: Product[] = [
    {name: "TestName1", image: "TestImage", cost: 30.5},
    {name: "TestName2", image: "TestImage2", cost: 320.5},
    {name: "TestName3", image: "TestImage3", cost: 39.5},
    {name: "TestName4", image: "TestImage4", cost: 30.5},
    {name: "TestName5", image: "TestImage5", cost: 33.5},
    {name: "TestName6", image: "TestImage6", cost: 306.5},
    {name: "TestName7", image: "TestImage7", cost: 37.5},
    {name: "TestName8", image: "TestImage8", cost: 309.5},
    {name: "TestName9", image: "TestImage9", cost: 32.5},
    {name: "TestName10", image: "TestImage10", cost: 33.5},
    {name: "TestName11", image: "TestImage11", cost: 33.5},
    {name: "TestName12", image: "TestImage12", cost: 30.5},
    {name: "TestName13", image: "TestImage13", cost: 33.5},
    {name: "TestName14", image: "TestImage14", cost: 33.5},
    {name: "TestName15", image: "TestImage15", cost: 30.5}
  ];

  selectProduct(product: any): void {
    this.productSelected.emit(product);
  }}
