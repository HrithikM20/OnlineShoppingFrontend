import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../Service/customer-service.service';
import { PlacedOrder } from '../Extra ts files/PlacedOrder';
import { UserDetails } from '../Extra ts files/UserDetails';

@Component({
  selector: 'app-user-myorder',
  templateUrl: './user-myorder.component.html',
  styleUrls: ['./user-myorder.component.css']
})
export class UserMyorderComponent implements OnInit {

  user : UserDetails;
  myOrders : PlacedOrder[];
  uId : number;

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
      this.uId = parseInt(sessionStorage.getItem('user'));
      this._customerService.getUserById(sessionStorage.getItem('user'))
      .subscribe(data=>{
        this.user = data;
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
