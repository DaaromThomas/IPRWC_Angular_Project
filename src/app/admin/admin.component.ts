import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.less'
})
export class AdminComponent {

  constructor(private appComponent: AppComponent){}

  ngOnInit(){
    this.appComponent.setShopping(false);
  }

}
