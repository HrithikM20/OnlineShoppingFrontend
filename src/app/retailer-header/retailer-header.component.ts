import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retailer-header',
  templateUrl: './retailer-header.component.html',
  styleUrls: ['./retailer-header.component.css']
})
export class RetailerHeaderComponent implements OnInit {

  rId: number;
  constructor
  (
    private _router : Router
  ) { }

  ngOnInit(): void {
    if(parseInt(sessionStorage.getItem('retailer'))>0)
    {
      this.rId = parseInt(sessionStorage.getItem('retailer'));
    }
    else
    {
      alert("Retailer Not Logged In");
      this._router.navigate(['retailer-login']);
    }
  }

  logoutRetailer()
  {
    sessionStorage.setItem('retailer',null);
    this._router.navigate(['retailer-login']);
  }

  home()
  {
    this._router.navigate(['retailer-profile']);
  }

}