import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderComponent } from './components/header/header/header.component';
import { AddProductComponent } from './contents/add-product/add-product/add-product.component';
import { DragNdropDirective } from './contents/add-product/drag-ndrop.directive';
import { AllProductsComponent } from './contents/all-products/all-products/all-products.component';
import { LoginComponent } from './contents/login/login/login.component';
import { MainPageComponent } from './contents/main-page/main-page/main-page.component';
import { ProductDetailsComponent } from './contents/product-details/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    AllProductsComponent,
    LoginComponent,
    ProductDetailsComponent,
    AddProductComponent,
    DragNdropDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
