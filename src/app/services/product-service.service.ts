import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products: Product[] = [
    new Product("TestName1", "TestImage", 30.5),
    new Product("TestName2", "TestImage2", 320.5),
    new Product("TestName3", "TestImage3", 39.5),
    new Product("TestName4", "TestImage4", 30.5),
    new Product("TestName5", "TestImage5", 33.5),
    new Product("TestName6", "TestImage6", 306.5),
    new Product("TestName7", "TestImage7", 37.5),
    new Product("TestName8", "TestImage8", 309.5),
    new Product("TestName9", "TestImage9", 32.5),
    new Product("TestName10", "TestImage10", 33.5),
    new Product("TestName11", "TestImage11", 33.5),
    new Product("TestName12", "TestImage12", 30.5),
    new Product("TestName13", "TestImage13", 33.5),
    new Product("TestName14", "TestImage14", 33.5),
    new Product("TestName15", "TestImage15", 30.5)
  ];

  public all(): Observable<Product[]>{
    return of(this.products);
  }

  constructor() { }
}
