import { Component, Input } from '@angular/core';
import { EventEmitter } from 'stream';
import { Product } from '../../../interfaces/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.less'
})
export class ProductComponent {
  @Input() product!: Product;

}
