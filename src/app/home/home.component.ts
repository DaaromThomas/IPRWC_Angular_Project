import { Component } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {

  constructor(private appComponent: AppComponent){}

  ngOnInit(){
    this.appComponent.setShopping(true);
  }

}
