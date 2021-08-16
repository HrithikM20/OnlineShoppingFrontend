import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '../Extra ts files/Product';
import { ProductServiceService } from '../Service/product-service.service';

@Component({
  selector: 'app-display-all-products',
  templateUrl: './display-all-products.component.html',
  styleUrls: ['./display-all-products.component.css']
})
export class DisplayAllProductsComponent implements OnInit {

  isDesc : boolean = false;
  isAsc : boolean = false;
  sortFlag : number = -1;
  name: string;
  pBrand: string;
  pStart: number = 0;
  pEnd: number = 0;
  message: string;
  products = [];
  compareProduct: number[] = [];
  showCompareButton : boolean = false;
  constructor
    (private _productService : ProductServiceService,
    private  _route : ActivatedRoute,
    private _router : Router) { }

  ngOnInit(): void
  {
    this.showCompareButton = false;
    this._route.paramMap.subscribe((params: ParamMap)=>
    {
      let keyword = params.get('keyword');
      this._productService.getProductBySearch(keyword)
      .subscribe((data: Product[])=>{console.log(data);this.products=data});
    });
  }
  onRadioClick($event)
  {
    if($event.target.value === "asc")
    {
      this.isAsc = true;
    }
    else
    {
      this.isDesc = true;
    }
  }

  onBrandSortClicked()
  {
      if(this.isDesc===false && this.isAsc===false)
      {
        alert("nothing selected!");
      }
      else if(this.isAsc===true)
      {
        this.sortFlag = 1;
        this.isAsc = false;
        this.products = [];
        this._productService.sortProduct('brand',1)
        .subscribe((data: Product[])=>{console.log(data);this.products=data});
      }
      else
      {
        this.sortFlag = 0;
        this.isDesc = false;
        this.products = [];
        this._productService.sortProduct('brand',0)
        .subscribe((data: Product[])=>{console.log(data);this.products=data});
      }
  }

  onPriceSortClicked()
  {
      if(this.isDesc===false && this.isAsc===false)
      {
        alert("nothing selected!");
      }
      else if(this.isAsc===true)
      {
        this.sortFlag = 1;
        this.isAsc = false;
        this._productService.sortProduct('price',1)
        .subscribe((data: Product[])=>{console.log(data);this.products=data});
      }
      else
      {
        this.sortFlag = 0;
        this.isDesc = false;
        this._productService.sortProduct('price',0)
        .subscribe((data: Product[])=>{console.log(data);this.products=data});
      }
  }

  onFilterClick()
  {
    if(this.pBrand=="" && this.pStart==0 && this.pEnd==0)
    {
      alert("nothing selected!");
    }
    else if(this.pBrand!="" && this.pStart==0 && this.pEnd==0)
    {
      this.products = [];
      this._productService.filterProduct(this.pBrand,0,0)
      .subscribe((data: Product[])=>{console.log(data);this.products=data});
      if(this.products.length==0) 
      {
        this.message = "No Product Available";
      }
    }
    else
    {
      this.products = [];
      this._productService.filterProduct(this.pBrand,this.pStart,this.pEnd)
      .subscribe((data: Product[])=>{console.log(data);this.products=data});
      if(this.products.length==0) 
      {
        this.message = "No Product Available";
      }
    }
  }
  showProductById(product : Product)
  {
    this._router.navigate(['/display-single-product',product.pId]);
  }

  onCompareClick(selectedProduct: Product)
  {
    if(this.compareProduct.length+1 <= 4)
    {
      this.compareProduct.push(selectedProduct.pId);
      sessionStorage.setItem('compare-product',JSON.stringify(this.compareProduct));
      if(this.compareProduct.length>=2)
      {
        this.showCompareButton = true;
      }
    }
    else
    {
      alert("Cannot Compare more than 4 Products");
    }
  }


}
