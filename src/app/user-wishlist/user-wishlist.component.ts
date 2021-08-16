import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wishlist } from '../Extra ts files/Wishlist';
import { CustomerServiceService } from '../Service/customer-service.service';

@Component({
  selector: 'app-user-wishlist',
  templateUrl: './user-wishlist.component.html',
  styleUrls: ['./user-wishlist.component.css']
})
export class UserWishlistComponent implements OnInit {
  userWishlist: Wishlist[];

  uId: string;

  constructor(
    private _customerService: CustomerServiceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.uId = sessionStorage.getItem('user');
    if (this.uId == 'null') {
      alert('User Not Logged In');
      this._router.navigate(['home']);
    }
    this._customerService
      .getMyWishlist(this.uId)
      .subscribe((data: Wishlist[]) => {
        this.userWishlist = data;
      });
  }
  reloadData() {
    this.uId = sessionStorage.getItem('user');
    if (this.uId == 'null') {
      alert('User Not Logged In');
      this._router.navigate(['home']);
    }
    this._customerService
      .getMyWishlist(this.uId)
      .subscribe((data: Wishlist[]) => {
        this.userWishlist = data;
      });
  }

  onDeleteWishlistProductClick(wId: number) {
    this._customerService
      .deleteMyWishlist(wId.toString())
      .subscribe((data: string) => {
        this.reloadData();
      });
  }

  addToMyCart(pID: number, wID: number) {
    let uId = sessionStorage.getItem('user');
    this._customerService.addToMyCart(uId, pID.toString()).subscribe((data) => {
      this.onDeleteWishlistProductClick(wID);
      this._router.navigate(['user-cart']);
    });
  }
}
