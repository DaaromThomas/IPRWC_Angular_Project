import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ProductServiceService } from '../../services/product-service.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent {
  @Output() productSelected = new EventEmitter<Product>();

  products: Product[] = [
  ];

  constructor(private productService: ProductServiceService, private cartService: CartService){
    
  }

  ngOnInit(){
    this.productService.getAllProducts();
    this.productService
    .all()
    .subscribe((data: Product[]) => {
      this.products = data;
    })
  }

  selectProduct(product: any): void {
    this.productSelected.emit(product);
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }
}
