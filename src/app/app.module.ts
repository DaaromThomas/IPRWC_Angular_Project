import { NgModule } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeModule } from './home/home.module';
import { ShopModule } from './shop/shop.module';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    ],
  imports: [
    AppRoutingModule,
    HomeModule,
    ShopModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
