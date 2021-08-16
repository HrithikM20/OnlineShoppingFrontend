import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerServiceService } from './Service/customer-service.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserMyorderComponent } from './user-myorder/user-myorder.component';
import { UserPlaceOrderComponent } from './user-place-order/user-place-order.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminRetailersComponent } from './admin-retailers/admin-retailers.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { RetailerServiceService } from './Service/retailer-service.service';
import { CommonModule } from '@angular/common';
import { RetailerHeaderComponent } from './retailer-header/retailer-header.component';
import { RegisterRetailerComponent } from './register-retailer/register-retailer.component';
import { RetailerLoginComponent } from './retailer-login/retailer-login.component';
import { RetailerProductsComponent } from './retailer-products/retailer-products.component';
import { RetailerProfileComponent } from './retailer-profile/retailer-profile.component';
import { RetailerUpdateProductComponent } from './retailer-update-product/retailer-update-product.component';
import { RetailerForgotComponent } from './retailer-forgot/retailer-forgot.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompareProductsComponent } from './compare-products/compare-products.component';
import { DisplayAllProductsComponent } from './display-all-products/display-all-products.component';
import { UserWishlistComponent } from './user-wishlist/user-wishlist.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { UserCartComponent } from './user-cart/user-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    ResetPasswordComponent,
    UserMyorderComponent,
    UserPlaceOrderComponent,
    RegisterUserComponent,
    AdminLoginComponent,
    AdminProfileComponent,
    AdminRetailersComponent,
    AdminHeaderComponent,
    AdminUpdateComponent,
    RetailerHeaderComponent,
    RegisterRetailerComponent,
    RetailerLoginComponent,
    RetailerProductsComponent,
    RetailerProfileComponent,
    RetailerUpdateProductComponent,
    RetailerForgotComponent,
    CompareProductsComponent,
    DisplayAllProductsComponent,
    UserWishlistComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SingleProductComponent,
    UserCartComponent,


   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,

  ],
  providers: [CustomerServiceService,RetailerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
