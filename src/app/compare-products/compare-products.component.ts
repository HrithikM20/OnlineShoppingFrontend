import { Component, OnInit } from '@angular/core';
import { Product } from '../Extra ts files/Product';
import { ProductServiceService } from '../Service/product-service.service';

@Component({
  selector: 'app-compare-products',
  templateUrl: './compare-products.component.html',
  styleUrls: ['./compare-products.component.css']
})
export class CompareProductsComponent implements OnInit {

  compareProduct  = [];
  products = [];
  constructor
  (
    private _productService : ProductServiceService
  ) { }

  ngOnInit(): void 
  {
    if(sessionStorage.getItem('compare-product'))
    {
      this.compareProduct = JSON.parse(sessionStorage.getItem('compare-product'));
      for(let i=0; i<this.compareProduct.length; i++)
      {
        this._productService.getProductById(this.compareProduct[i])
      .subscribe((data: Product)=>{console.log(data);this.products.push(data)});
      }
      
    }
  }


}
