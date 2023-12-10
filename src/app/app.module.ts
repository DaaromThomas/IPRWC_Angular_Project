import { NgModule } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeModule } from './home/home.module';
import { ShopModule } from './shop/shop.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
    ],
  imports: [
    AppRoutingModule,
    HomeModule,
    ShopModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
