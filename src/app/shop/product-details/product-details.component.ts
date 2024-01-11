import { Component } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.less'
})
export class ProductDetailsComponent {
  public product!: Product;

  constructor(
    private appComponent: AppComponent,
    private detailsService: DetailsService,
    private router: Router
    ){}

  ngOnInit(){
    this.appComponent.setShopping(true);
    this.product = this.detailsService.product;
  }

  goToProductsScreen(): void {
    this.router.navigate(['/shop']);
  }
}
