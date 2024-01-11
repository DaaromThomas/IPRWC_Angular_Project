import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  baseUrl: string = "http://85.215.60.238:8080";
  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.getAllProducts();
  }

  public all(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + "/products");
  }

  getAllProducts() {
    this.all().subscribe(
      data => {
        this.products = data;
      },
      error => {
      }
    );
  }

  public addProduct(name: string, cost: number, imagedata: string) {
    const product: Product = new Product(this.generateUUID(), name, imagedata, cost);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post(this.baseUrl + "/products", product, { headers })
      .subscribe(() => {
        this.getAllProducts();
      });
  }

  public getProductById(id: string): Product | undefined {
    for (const product of this.products) {
      const productId = product.id;
      if (productId === id) {
        return product;
      }
    }
    return undefined;
  }

  generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
