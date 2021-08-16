import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProduct } from '../Extra ts files/AddProduct';
import { Product } from '../Extra ts files/Product';
import { RetailerServiceService } from '../Service/retailer-service.service';


@Component({
  selector: 'app-retailer-update-product',
  templateUrl: './retailer-update-product.component.html',
  styleUrls: ['./retailer-update-product.component.css']
})
export class RetailerUpdateProductComponent implements OnInit {


  product =  new AddProduct();
  myProduct: Product;
  constructor(
    private _router : Router,
    private _retailerService : RetailerServiceService,

  ) { }

  ngOnInit(): void {
    let rId = sessionStorage.getItem('retailer');
    if(rId!="null")
    {
    } 
    else
    {
      alert("Retailer Not Logged In");
      this._router.navigate(['home']);
    }
    this._retailerService.getProductById(parseInt(sessionStorage.getItem('pId')))
    .subscribe(data=>{
      this.myProduct = data;
      this.product.pBrand = data.pBrand;
      this.product.pCategory = data.pCategory;
      this.product.pSubCategory = data.pSubCategory;
      this.product.pImage1 = data.pImage1;
      this.product.pImage2 = data.pImage2;
      this.product.pName  = data.pName;
      this.product.pPrice = data.pPrice;
      this.product.pQty = data.pQty;
      this.product.pDescription = data.pDescription;
    });

  }
  onEditProduct()
  {
    this._retailerService.updateProduct(this.product,sessionStorage.getItem('pId'))
      .subscribe(data=>
      {
        alert("Product Updated Successfull");
        this._router.navigate(['retailer-products']);
      });
  }

}
