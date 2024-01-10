import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'IPRWC_Angular_Project';

  public shopping: boolean = true;

  constructor(private router: Router){}

  ngOnInit() {
    // Subscribe to router events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is 'login'
        if (event.url === '/login') {
          // Set shopping to false when navigating to the login page
          this.setShopping(false);
        }
      }
    });
  }

  setShopping(value: boolean){
    this.shopping = value;
  }

  getShopping(){
    return this.shopping;
  }
}
