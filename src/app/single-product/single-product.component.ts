import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '../Extra ts files/Product';
import { CustomerServiceService } from '../Service/customer-service.service';
import { ProductServiceService } from '../Service/product-service.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  product : Product;
  pId;
  flag:boolean = false;
  constructor
  (private _productService : ProductServiceService,
    private _customerService : CustomerServiceService,
    private  _route : ActivatedRoute,
    private _router : Router) { }



  ngOnInit(): void
  {
    this._route.paramMap.subscribe((params: ParamMap)=>
    {
      this.pId = parseInt(params.get('id'));
      this._productService.getProductById(this.pId)
      .subscribe((data: Product)=>{console.log(data);this.product=data});
    });
  }

  addToMyCart(pID: string)
  {
    let uId = sessionStorage.getItem('user');
    if(uId!="null")
    {

      this._customerService.addToMyCart(uId,pID)
      .subscribe(data=>
        {
          alert(data);
          this._router.navigate(['user-cart']);
        });
      }
      else
      {
        alert("First Log In");
      }
  }
  addToMyWishlist(pID: string)
  {
    let uId = sessionStorage.getItem('user');
    if(uId!="null")
    {

      this._customerService.addToMyWishlist(uId,pID)
      .subscribe(data=>
        {
          alert(data);
          this._router.navigate(['user-wishlist']);
        });
      }
      else
      {
        alert("First Log In");
      }
    
  }
}