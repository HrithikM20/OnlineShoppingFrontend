import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Retailer } from '../Extra ts files/RetailerSignUp';
import { RetailerServiceService } from '../Service/retailer-service.service';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {
  upRetailer = new  Retailer();
  exform:FormGroup;
  constructor
  (
    private _router : Router,
    private _retailerService : RetailerServiceService,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    if(sessionStorage.getItem('admin')=="null")
    {
      alert("Admin Not Logged In");
      this._router.navigate(['admin-login']);
    }
    this.exform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      mobile: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      name: ['', [Validators.required, Validators.minLength(4)]]
  });
  }
  updateRetailer()
  {
    
    this._retailerService.updateRetailer(this.upRetailer)
    .subscribe(data=>
      {
        if(data==null)
        {
          alert("Retailer not exists");
        }
        else
        {
          alert("Updated Successfully");
        }
      })
  }

}
