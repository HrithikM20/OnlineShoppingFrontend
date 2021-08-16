import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetailerServiceService } from '../Service/retailer-service.service';
import { Retailer } from '../Extra ts files/RetailerSignUp';
import { FormGroup,FormControl,Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  exform:FormGroup;


  newRetailer = new  Retailer();
  
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
      this._router.navigate(['home']);
    }
    this.exform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      mobile: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      name: ['', [Validators.required, Validators.minLength(4)]]
  });
  }

  addRetailer()
  {
    
    this._retailerService.addNewRetailer(this.newRetailer)
    .subscribe(data=>
      {
        if(data==-100)
        {
          alert("Retailer already Exists");
        }
        else
        {
          alert("New Retailer Added");
        }
      })
  }

  get f() { return this.exform.controls; }
  UpdateUser(){
    this._router.navigate(['admin-update']);
  }

}
