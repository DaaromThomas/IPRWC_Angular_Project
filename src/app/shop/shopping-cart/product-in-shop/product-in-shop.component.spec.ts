import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInShopComponent } from './product-in-shop.component';

describe('ProductInShopComponent', () => {
  let component: ProductInShopComponent;
  let fixture: ComponentFixture<ProductInShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductInShopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductInShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
