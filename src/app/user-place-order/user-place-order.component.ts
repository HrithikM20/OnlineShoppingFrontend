import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../Service/customer-service.service';
import { Cart } from '../Extra ts files/Cart';

@Component({
  selector: 'app-user-place-order',
  templateUrl: './user-place-order.component.html',
  styleUrls: ['./user-place-order.component.css']
})
export class UserPlaceOrderComponent implements OnInit {
 totalPrice: number = 0;
  userCart: Cart[];
  uId: string;
  payType: string;
  constructor(
    private _customerService : CustomerServiceService,
    private _router : Router
  ) { }

  ngOnInit(): void
  {
    this.uId = sessionStorage.getItem('user');
    if(this.uId=="null")
    {
      alert("User Not Logged In");
      this._router.navigate(['user-login']);
    }
    this._customerService.getMyCart(this.uId)
    .subscribe((data:Cart[])=>
    {
      this.userCart = data;
      this.totalPrice = this.userCart[this.userCart.length-1].totalPrice;
    });
  }

  getTotalValue(pPrice,qty)
  {
    return pPrice * qty;
  }

  placeOrder()
  {
    this._customerService.placeOrder(this.userCart,this.payType)
    .subscribe(data=>
      {
        alert(data);
        this._router.navigate(['user-login']);
      })
  }

  logOut(){
    sessionStorage.setItem('user',"null");
    alert("User Logged out");
    this._router.navigate(['user-login']);
  }
}
