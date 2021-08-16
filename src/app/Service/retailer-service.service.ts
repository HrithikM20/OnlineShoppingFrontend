import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Extra ts files/Login';
import { Retailer } from '../Extra ts files/RetailerSignUp';
import { AddProduct } from '../Extra ts files/AddProduct';
import { Product } from '../Extra ts files/Product';
import { Reset } from '../Extra ts files/Reset';

@Injectable({
  providedIn: 'root'
})
export class RetailerServiceService {

  private _tempurl =  'http://localhost:8090/';
  private _url =      'http://localhost:8090/';
  constructor(private _http : HttpClient) { }

  login(login : Login) : Observable<number>
  {
    this._url = this._tempurl;
    this._url += 'retailerLogin';
    return this._http.post<number>(this._url,login);
  }

  getRetailerById(rId: string) : Observable<Retailer>
  {
    this._url = this._tempurl;
    this._url += 'getRetailerById/' + rId;
    return this._http.get<Retailer>(this._url);
  }
  addNewRetailer(newRetailer:Retailer) : Observable<number>
  {
    this._url = this._tempurl;
    this._url += 'addNewRetailer';
    return this._http.post<number>(this._url,newRetailer);
  }
  showAllRetailers() : Observable<Retailer[]>
  {
    this._url = this._tempurl;
    this._url += 'showAllRetailers';
    return this._http.get<Retailer[]>(this._url);
  }
  deleteRetailerById(rid : number) : Observable<string> {//eno is copied here to empNo
    this._url = this._tempurl;
    this._url += 'deleteRetailerById/' + rid;
    return this._http.delete<string>(this._url);
    }
    updateRetailer(newRetailer:Retailer) : Observable<number>
  {
    this._url = this._tempurl;
    this._url += 'updateRetailer';
    return this._http.put<number>(this._url,newRetailer);
  }

  addProduct(newProduct:AddProduct,rId: string)
  {
    this._url = this._tempurl;
    this._url += 'addProduct/' + rId;
    return this._http.post(this._url,newProduct);
  }

  getMyProduct(rId: string) : Observable<Product[]>
  {
    this._url = this._tempurl;
    this._url += 'getMyProduct/' + rId;
    return this._http.get<Product[]>(this._url);
  }

  updateProduct(updateProduct : AddProduct, pId: string) : Observable<AddProduct>
  {
    this._url = this._tempurl;
    this._url += 'updateProduct/' + pId;
    return this._http.put<AddProduct>(this._url,updateProduct);
  }
  getProductById(id : number) : Observable<Product>
  {
    this._url = this._tempurl;
    this._url += 'getProductById/' + id;
    return this._http.get<Product>(this._url);
  }

  forgotPassword(reset : Reset) : Observable<number>
  {
    this._url = this._tempurl;
    this._url += 'updateRetailer/reset';
    return this._http.put<number>(this._url,reset);
  }

  deleteProduct(rId : number, pId:number): Observable<string>
  {
    this._url = this._tempurl;
    this._url += 'deleteProductByrid/' +rId +'/' + pId;
    return this._http.delete<string>(this._url);
  }
}
