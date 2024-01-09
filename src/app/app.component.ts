import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'IPRWC_Angular_Project';

  public shopping: boolean = true;

  setShopping(value: boolean){
    this.shopping = value;
  }

  getShopping(){
    return this.shopping;
  }
}
