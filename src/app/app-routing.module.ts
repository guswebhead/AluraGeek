import { MainPageComponent } from './contents/main-page/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './contents/product-details/product-details/product-details.component';
import { LoginComponent } from './contents/login/login/login.component';
import { AllProductsComponent } from './contents/all-products/all-products/all-products.component';
import { AddProductComponent } from './contents/add-product/add-product/add-product.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'productDetail',
    component: ProductDetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'allProduct',
    component: AllProductsComponent,
    children: [
      {
        path: "newProduct",
        component: AddProductComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
