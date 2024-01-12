import { ChangeDetectorRef, Component } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.less'
})
export class ProductDetailsComponent {
  public product!: Product | undefined;

  constructor(
    private appComponent: AppComponent,
    private productService: ProductServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
    ){}

  ngOnInit(){
    const productId = this.route.snapshot.params['id'];
    this.product = this.productService.getProductById(productId); 

    this.appComponent.setShopping(true);
    this.cdr.detectChanges();
  }

  goToProductsScreen(): void {
    this.router.navigate(['/shop']);
  }
}
