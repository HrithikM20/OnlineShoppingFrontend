import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../Extra ts files/Cart';
import { CustomerServiceService } from '../Service/customer-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword: string;
  loginOrLogout: string;
  cQty: number;
  uId : number;
  constructor(
    private _router : Router,
    private _customerService : CustomerServiceService) { }

  ngOnInit(): void {
    if(parseInt(sessionStorage.getItem('user'))>0)
    {
      this.uId = parseInt(sessionStorage.getItem('user'));
      this.loginOrLogout = 'Logout';
      this._customerService.getMyCart(sessionStorage.getItem('user'))
      .subscribe((data:Cart[])=>{
        this.cQty = data.length;
      })
    }
    else
    {
      this.loginOrLogout = 'Login';
    }
  }

  onProductSearchCicked()
  {
    this._router.navigate(['/display-all-products',this.keyword]);
  }

  loginUser()
  {
    this._router.navigate(['/user-login']);
  }

  logoutUser()
  {
    alert('User Logged Out');
    sessionStorage.setItem('user',null);
    this.cQty = null;
    this.uId = null;
    this.ngOnInit();
    this._router.navigate(['home']);
  }

  showMyCart()
  {
    if(parseInt(sessionStorage.getItem('user'))>0)
    {
      this._router.navigate(['user-cart']);
    }
    else
    {
      alert("Not Logged In");
    }
  }

}