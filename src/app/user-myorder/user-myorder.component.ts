import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../Service/customer-service.service';
import { PlacedOrder } from '../Extra ts files/PlacedOrder';

@Component({
  selector: 'app-user-myorder',
  templateUrl: './user-myorder.component.html',
  styleUrls: ['./user-myorder.component.css']
})
export class UserMyorderComponent implements OnInit {
  myOrders : PlacedOrder[];
  
  constructor
  (
    private _customerService : CustomerServiceService,
    private _router : Router
  ) { }

  ngOnInit(): void 
  {
    if(sessionStorage.getItem('user')!="null")
    {
      this._customerService.getMyPlacedOrders(sessionStorage.getItem('user'))
      .subscribe((data:PlacedOrder[])=>{
        this.myOrders = data;
      });
    }
    else
    {
      alert("User Not Logged In");
      this._router.navigate(['user-login']);
    }
    
  }
  logOut(){
    sessionStorage.setItem('user',"null");
    alert("User Logged out");
    this._router.navigate(['user-login']);
  }
  placeOrder(){
    this._router.navigate(['user-place-order']);
  }
}
