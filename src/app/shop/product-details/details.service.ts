import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  public product!: Product;

  constructor() { }
}
