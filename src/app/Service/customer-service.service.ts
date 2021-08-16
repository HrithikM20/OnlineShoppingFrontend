import { HttpClient,HttpRequest,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reset } from '../Extra ts files/Reset';
import { UserDetails } from '../Extra ts files/UserDetails';
import { UserSignUp } from '../Extra ts files/UserSignUp';
import { Login } from '../user-login/Login';
import { PlacedOrder } from '../Extra ts files/PlacedOrder';
import { Cart } from '../Extra ts files/Cart';
import { Wishlist } from '../Extra ts files/Wishlist';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  

  private _tempurl =  'http://localhost:8090/';
  private _url =      'http://localhost:8090/';


  constructor(private _http : HttpClient) { }

  login(login : Login) : Observable<number>
  {
    this._url = this._tempurl;
    this._url += 'login';
    return this._http.post<number>(this._url,login);
  }
  resetPassword(reset:Reset) : Observable<number>
  {
    this._url = this._tempurl;
    this._url += 'updateCustomer/reset';

    return this._http.put<number>(this._url,reset);
  }

 getMyPlacedOrders(uId: string) : Observable<PlacedOrder[]>
  {
    this._url = this._tempurl;
    this._url += 'getMyPlacedOrders/' + uId;
    return this._http.get<PlacedOrder[]>(this._url);
  }
  getMyCart(uId : string) : Observable<Cart[]>
  {
    this._url = this._tempurl;
    this._url += 'getMyCart/' + uId;
    return this._http.get<Cart[]>(this._url);
  }
  placeOrder(cart:Cart[],type:string)
  {
    this._url = this._tempurl;
    this._url += 'placeOrder' + '/' + type;
    return this._http.post(this._url,cart,{responseType:'text'});
  }

  addNewUser(newUser:UserSignUp)
  {
    this._url = this._tempurl;
    this._url += 'addNewUser';
    return this._http.post(this._url,newUser);
  }
  getUserById(uId : string) : Observable<UserDetails>
  {
    this._url = this._tempurl;
    this._url += 'getUserById/' + uId;
    return this._http.get<UserDetails>(this._url);
  }

  updateMyCart(cId: string, addOrMinus: string) {
    this._url = this._tempurl;
    this._url += 'updateMyCart/' + cId;
    if (addOrMinus === '1') {
      this._url += '/' + '1';
      return this._http.get(this._url, { responseType: 'text' });
    } else {
      this._url += '/' + '0';
      return this._http.get(this._url, { responseType: 'text' });
    }
  }
  deleteMyCart(cId: string) {
    this._url = this._tempurl;
    this._url += 'deleteMyCart/' + cId;
    return this._http.delete(this._url, { responseType: 'text' });
  }
  addToMyCart(uId: string, pId: string) {
    this._url = this._tempurl;
    this._url += 'addToMyCart/' + uId + '/' + pId;
    return this._http.get(this._url, { responseType: 'text' });
  }
  getMyWishlist(uId: string): Observable<Wishlist[]> {
    this._url = this._tempurl;
    this._url += 'getMyWishlist/' + uId;
    return this._http.get<Wishlist[]>(this._url);
  }

  deleteMyWishlist(cId: string) {
    this._url = this._tempurl;
    this._url += 'deleteMyWishlist/' + cId;
    return this._http.delete(this._url, { responseType: 'text' });
  }

  addToMyWishlist(uId: string, pId: string) {
    this._url = this._tempurl;
    this._url += 'addToMyWishlist/' + uId + '/' + pId;
    return this._http.get(this._url, { responseType: 'text' });
  }

}
