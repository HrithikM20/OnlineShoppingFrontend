import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../Extra ts files/Cart';
import { CustomerServiceService } from '../Service/customer-service.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

  userCart: Cart[];
  uId;
  totalPrice: number = 0;
  buyProductButton: boolean = false;
  constructor
  (
    private _customerService : CustomerServiceService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.uId = sessionStorage.getItem('user');
    if(this.uId=="null")
    {
      alert("User Not Logged In");
      this._router.navigate(['home']);
    }
    this._customerService.getMyCart(this.uId)
    .subscribe((data:Cart[])=>
    {
      this.userCart = data;
      if(this.userCart.length==0)
      {
        this.totalPrice = 0;
        this.buyProductButton = true;
        return;
      }
      this.totalPrice = this.userCart[this.userCart.length-1].totalPrice;
    });
  }

  reloadData()
  {
    this._customerService.getMyCart(this.uId)
    .subscribe((data:Cart[])=>
    {
      this.userCart = data;
      if(this.userCart.length==0)
      {
        this.totalPrice = 0;
        this.buyProductButton = true;
        return;
      }
      this.totalPrice = this.userCart[this.userCart.length-1].totalPrice;
    });
  }

  onAddUpdateClick(cId:number)
  {
    this._customerService.updateMyCart(cId.toString(),'1')
    .subscribe((data:string)=>
    {
      //alert(data);
      this.reloadData();
    });
  }
  onMinusUpdateClick(cId:number)
  {
    this._customerService.updateMyCart(cId.toString(),'0')
    .subscribe((data:string)=>
    {
      //alert(data);
      this.reloadData();
    });
  }
  onDeleteCartProductClick(cId:number)
  { 
    this._customerService.deleteMyCart(cId.toString())
    .subscribe((data:string)=>
    {
      this.reloadData();
    })
  }
  getTotalValue(pPrice,qty)
  {
    return pPrice * qty;
  }
}