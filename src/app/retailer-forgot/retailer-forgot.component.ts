import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Reset } from '../Extra ts files/Reset';
import { RetailerServiceService } from '../Service/retailer-service.service';

@Component({
  selector: 'app-retailer-forgot',
  templateUrl: './retailer-forgot.component.html',
  styleUrls: ['./retailer-forgot.component.css']
})
export class RetailerForgotComponent implements OnInit {

  email: string = "";
  password: string = "";
  repassword: string = "";
  rId$: Observable<number>;
  reset:Reset;
  message: String;
  constructor(
    private router : Router,
    private retailerService : RetailerServiceService
  ) { }

  ngOnInit(): void {
    if(parseInt(sessionStorage.getItem('user'))>0)
    {
      this.router.navigate(['retailer-login']);
    }
    else if(sessionStorage.getItem('forgot-email')=="null")
    {
      this.router.navigate(['retailer-login']);
    }
    else
    {
      this.email = sessionStorage.getItem('forgot-email');
    }
  }

  
  changePassword()
  {
    if(this.password==="" && this.repassword==="")
    {
      alert("First Enter Passwords");
    }
    else if(this.password!=this.repassword)
    {
      alert("Password do not Match");
    }

    else
    {
      this.reset=new Reset();
      this.reset.email = this.email;
      this.reset.password = this.repassword;
      
      console.log(this.reset.email,this.reset.password);
      this.rId$ = this.retailerService.forgotPassword(this.reset);
      
  }
  }

  moveToLoginPage(rid){
    if(rid==100)
    {
        this.router.navigate(['retailer-login']);
        alert("Password Updated Successfull");
    }
    else
    {
      alert("Enter correct email");
    }
    
  }
  


}