import { ChangeDetectorRef, Component} from '@angular/core';
import { CartService } from '../services/cart.service';
import { AppComponent } from '../app.component';
import { ProductInShoppingCart } from '../interfaces/ProductInShoppingCart';
import { Account } from '../interfaces/Account';
import { LoginService } from '../services/login.service';
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
  username: string | undefined;

  constructor(
    private cartService: CartService, 
    private loginService: LoginService,
    private cdr: ChangeDetectorRef,
    private appComponent: AppComponent
  ) {}

  ngOnInit() {
    this.loginService
      .observeAccount()
      .subscribe(
        (account: Account | null) => {
        this.account = account;
        if (this.account !== null) {
          this.loggedIn_ = true;
          this.isAdmin = this.account.role === RoleType.Admin;
        } else {
          this.loggedIn_ = false;
          this.isAdmin = false;
        }
        this.cdr.detectChanges();
      }
    );

    this.cartService.all().subscribe((data: ProductInShoppingCart[]) => {
      this.productsInShoppingCart = data;
      this.numberOfProductsInCart = this.calculateTotalQuantity(this.productsInShoppingCart);
    });
  }

  ngAfterViewInit(): void {
    if (this.loginService.Gaccount?.role === RoleType.Admin) {
      this.loggedIn = true;
      this.isAdmin = true;
    }
    if (this.loginService.Gaccount) {
      this.loggedIn = true;
    }
    this.username = this.loginService.Gaccount?.name;
    this.cdr.detectChanges();

  }

  private calculateTotalQuantity(cartItems: ProductInShoppingCart[]): number {
    let baseNumber: number = 0;
    for (let index in cartItems) {
      let cartItem = cartItems[index];
      baseNumber = baseNumber + Number(cartItem.quantity);
    }
    return baseNumber;
  }

  setLogin(){
    this.appComponent.setShopping(false);
  }

  logOut(){
    this.loginService.logout();
  }

  public get loggedIn(){
    return this.loggedIn_;
  }

  public set loggedIn(value: boolean){
    this.loggedIn_ = value;
  }
}
