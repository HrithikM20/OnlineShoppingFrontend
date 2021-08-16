import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminRetailersComponent } from './admin-retailers/admin-retailers.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { CompareProductsComponent } from './compare-products/compare-products.component';
import { DisplayAllProductsComponent } from './display-all-products/display-all-products.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterRetailerComponent } from './register-retailer/register-retailer.component';

import { RegisterUserComponent } from './register-user/register-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RetailerForgotComponent } from './retailer-forgot/retailer-forgot.component';
import { RetailerLoginComponent } from './retailer-login/retailer-login.component';
import { RetailerProductsComponent } from './retailer-products/retailer-products.component';
import { RetailerProfileComponent } from './retailer-profile/retailer-profile.component';
import { RetailerUpdateProductComponent } from './retailer-update-product/retailer-update-product.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { UserCartComponent } from './user-cart/user-cart.component';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserMyorderComponent } from './user-myorder/user-myorder.component';
import { UserPlaceOrderComponent } from './user-place-order/user-place-order.component';
import { UserWishlistComponent } from './user-wishlist/user-wishlist.component';

const routes: Routes = [
  {path:'user-login',component:UserLoginComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'user-myorder',component:UserMyorderComponent},
  {path:'user-place-order',component:UserPlaceOrderComponent},
  {path : 'register-user', component: RegisterUserComponent},
  {path : 'admin-login', component: AdminLoginComponent},
  {path : 'admin-profile', component: AdminProfileComponent},
  {path : 'admin-retailer', component: AdminRetailersComponent},
  {path : 'admin-update', component: AdminUpdateComponent},
  {path : 'retailer-login', component: RetailerLoginComponent},
  {path : 'retailer-register', component: RegisterRetailerComponent},
  {path : 'retailer-profile', component: RetailerProfileComponent},
  {path : 'retailer-products', component: RetailerProductsComponent},
  {path : 'retailer-update-product', component: RetailerUpdateProductComponent},
  {path : 'retailer-forgot', component: RetailerForgotComponent},
  {path : 'user-wishlist', component: UserWishlistComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  {
    path: 'display-all-products/:keyword',
    component: DisplayAllProductsComponent,
  },
  { path: 'display-single-product/:id', component: SingleProductComponent },

  { path: 'user-cart', component: UserCartComponent },

  { path: 'compare-product', component: CompareProductsComponent },
  { path: 'user-wishlist', component: UserWishlistComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
