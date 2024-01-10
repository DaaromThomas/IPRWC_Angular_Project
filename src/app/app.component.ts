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
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login' || event.url === '/register') {
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
