import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products: Product[] = [
    new Product(2, "TestName1", "TestImage", 30.5),
    new Product(3, "TestName2", "TestImage2", 320.5),
    new Product(4, "TestName3", "TestImage3", 39.5),
    new Product(5, "TestName4", "TestImage4", 30.5),
    new Product(6, "TestName5", "TestImage5", 33.5),
    new Product(7, "TestName6", "TestImage6", 306.5),
    new Product(8, "TestName7", "TestImage7", 37.5),
    new Product(9, "TestName8", "TestImage8", 309.5),
    new Product(10, "TestName9", "TestImage9", 32.5),
    new Product(11, "TestName10", "TestImage10", 33.5),
    new Product(12, "TestName11", "TestImage11", 33.5),
    new Product(13, "TestName12", "TestImage12", 30.5),
    new Product(14, "TestName13", "TestImage13", 33.5),
    new Product(15, "TestName14", "TestImage14", 33.5),
    new Product(16, "TestName15", "TestImage15", 30.5)
  ];

  public all(): Observable<Product[]>{
    return of(this.products);
  }

  constructor() { }
}
