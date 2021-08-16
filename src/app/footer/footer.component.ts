import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  uId: number;
  constructor
  (
    private _router : Router
  ) { }

  ngOnInit(): void 
  {
    this.uId = parseInt(sessionStorage.getItem('user'));
  }
  adminLogin()
  {
    if(this.uId>0)
    {
      alert("User cannot Login as Admin");
    }
    else
    {
      this._router.navigate(['admin-login']);
    }
    
  }

  retailerLogin()
  {
    if(this.uId>0)
    {
      alert("User cannot Login as Retailer");
    }
    else
    {
      this._router.navigate(['retailer-login']);
    }
  }
}