import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  baseUrl: string = "http://localhost:8080";
  products: Product[] = [];

  constructor(private http: HttpClient) { }

  public all(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + "/products");
  }

  getAllProducts() {
    this.all().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
