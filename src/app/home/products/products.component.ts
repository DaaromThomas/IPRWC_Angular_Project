import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less'],
  animations: [
    // Your animations here
  ],
})
export class ProductsComponent implements OnInit {
  sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  images: string[] = [
    'assets/FR-000-Away-Kit-Launch_Teams_EN_Collection-Banner_2034x678_77137a95-a667-405a-8a07-2f998dcbf1f9.webp',
    'assets/Castore_x_Feyenoord_b3645335-113c-4d50-9eb2-64030b08af0a.avif'
  ];

  mostSoldProducts: Product[] = [
    new Product("name", 'testimage', 30.3)
  ];

  index = 0;
  listLength = this.mostSoldProducts.length;
  selectedProduct: string = this.images[this.index];

  image: SafeUrl | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    console.log(this.images[0]);

    this.loopProducts();
  }

  async loopProducts() {
    while (true) {
      this.index += 1;
      await this.sleep(5000);
      this.selectedProduct = this.images[this.index];
      if (this.index === this.listLength) {
        this.index = 0;
      }
    }
  }

  previousProduct() {
    this.index -= 1;
    this.selectedProduct = this.images[this.index];
    console.log(this.index);
  }

  nextProduct() {
    this.index += 1;
    this.selectedProduct = this.images[this.index];
    console.log(this.index);
  }
}
