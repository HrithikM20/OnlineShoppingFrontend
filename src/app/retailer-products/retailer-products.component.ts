import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Extra ts files/Product';
import { RetailerServiceService } from '../Service/retailer-service.service';


@Component({
  selector: 'app-retailer-products',
  templateUrl: './retailer-products.component.html',
  styleUrls: ['./retailer-products.component.css']
})
export class RetailerProductsComponent implements OnInit {

  products: Product[] = [];
  rId: any;
  pId: any;
  constructor
  (
    private _retailerService : RetailerServiceService,
    private _router : Router
  ) { }

  ngOnInit(): void 
  {
    let rId = sessionStorage.getItem('retailer');
    if(rId!="null")
    {
      this._retailerService.getMyProduct(rId)
      .subscribe((data: Product[])=>{console.log(data);this.products=data});
    } 
    else
    {
      alert("Retailer Not Logged In");
      this._router.navigate(['home']);
    }
  }
  updateProductById(product)
  {
    sessionStorage.setItem('pId',product.pId);
    this._router.navigate(['retailer-update-product']);
  }

  
  deleteProduct(pId: number)
  {
    let rId = parseInt(sessionStorage.getItem('retailer'));
    console.log('checking',rId,pId);
    this._retailerService.deleteProduct(rId,pId).subscribe(_data=>{})
    alert('Delete Successfully')
    
    
  }
}
