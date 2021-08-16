import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Retailer } from '../Extra ts files/RetailerSignUp';
import { AddProduct } from '../Extra ts files/AddProduct';
import { Product } from '../Extra ts files/Product';

import { RetailerServiceService } from '../Service/retailer-service.service';


@Component({
  selector: 'app-retailer-profile',
  templateUrl: './retailer-profile.component.html',
  styleUrls: ['./retailer-profile.component.css']
})

export class RetailerProfileComponent implements OnInit {

  retailer : Retailer;
  myProducts : Product[];
  constructor
  (
    private _retailerService : RetailerServiceService,
    private _router : Router
  ) { }
  rId : number;
  product = new AddProduct();
  ngOnInit(): void {
    if(parseInt(sessionStorage.getItem('retailer'))>0)
    {
      this.rId = parseInt(sessionStorage.getItem('retailer'));
      this._retailerService.getRetailerById(sessionStorage.getItem('retailer'))
      .subscribe(data=>{
        this.retailer = data;
      });
      this._retailerService.getMyProduct(sessionStorage.getItem('retailer'))
      .subscribe(data=>{
        this.myProducts = data;
      });
    }
    else
    {
      alert("Retaier Not Logged In");
      this._router.navigate(['home']);
    }
  }
  onAddProduct()
  {
    this._retailerService.addProduct(this.product,this.rId.toString())
    .subscribe(data=>{
      alert(data);
    })
  }

}
