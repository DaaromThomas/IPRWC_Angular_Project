import { ChangeDetectorRef, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'IPRWC_Angular_Project';

  public shopping: boolean = true;

  constructor(private router: Router, private cdr: ChangeDetectorRef){}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login' || event.url === '/register') {
          this.setShopping(false);
          this.cdr.detectChanges();
        }
      }
    });
  }

  setShopping(value: boolean){
    this.shopping = value;
    this.cdr.detectChanges();
  }

  getShopping(){
    return this.shopping;
  }
}
