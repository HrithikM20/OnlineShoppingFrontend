import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor
  (
    private _router : Router
  ) { }


  ngOnInit(): void {
  }

  logoutAdmin()
  {
    sessionStorage.setItem('admin',null);
    this._router.navigate(['admin-login']);
  }

}
