import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/Product';
import { CartService } from '../services/cart.service';
import { AppComponent } from '../app.component';
import { ProductInShoppingCart } from '../interfaces/ProductInShoppingCart';
import { Account } from '../interfaces/Account';
import { LoginService } from '../services/login.service';
import { LoginStateService } from '../services/login-state.service';
import { RoleType } from '../interfaces/RoleType';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent{

  productsInShoppingCart: ProductInShoppingCart[] = [];
  numberOfProductsInCart: number = 0;

  account: Account | null = null;
  loggedIn_: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private cartService: CartService, 
    private loginService: LoginService,
    private appComponent: AppComponent,
    private loginStateService: LoginStateService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if (this.loginService.Gaccount?.role === RoleType.Admin) {
      this.isAdmin = true;
      this.cdr.detectChanges();
    }
  }

  ngOnInit() {
    this.loginStateService.getLoggedIn().subscribe((value) => {
      this.loggedIn = value;
    });

    this.loginService
      .observeAccount()
      .subscribe(
      (account: Account | null) => {
        this.account = account;
      },
      (error) => {
        console.error('Error while observing account:', error);
      }
    );

    this.cartService.all().subscribe((data: ProductInShoppingCart[]) => {
      this.productsInShoppingCart = data;
      this.numberOfProductsInCart = this.calculateTotalQuantity(this.productsInShoppingCart);
    });
  }

  
  
  private calculateTotalQuantity(cartItems: ProductInShoppingCart[]): number {
    let baseNumber: number = 0;
    for(let index in cartItems){
      let cartItem = cartItems[index];
      baseNumber = baseNumber + Number(cartItem.quantity);
    }
    return baseNumber;
  }

  setLogin(){
    this.appComponent.setShopping(false);
  }

  public get loggedIn(){
    return this.loggedIn_;
  }

  public set loggedIn(value: boolean){
    this.loggedIn_ = value;
  }
}
