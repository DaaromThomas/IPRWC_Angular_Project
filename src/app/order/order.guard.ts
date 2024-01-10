// order.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderGuard implements CanActivate {

  constructor(private cartService: CartService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const hasProductsInCart = this.cartService.hasProductsInCart();

    if (hasProductsInCart) {
      // Allow navigation to the order page
      return true;
    } else {
      // Redirect to the shop page if no products in the cart
      this.router.navigate(['/shop']);
      return false;
    }
  }
}
