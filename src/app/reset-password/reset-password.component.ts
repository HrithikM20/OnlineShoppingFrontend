import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Reset } from '../Extra ts files/Reset';
import { CustomerServiceService } from '../Service/customer-service.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  email: string = "";
  password: string = "";
  repassword: string = "";
  //checkid=cid
  cId$: Observable<number>;
 reset:Reset;
  message: String;
  constructor(
    private _router : Router,
    private _customerService : CustomerServiceService
  ) { }

  ngOnInit(): void {
    if(parseInt(sessionStorage.getItem('user'))>0)
    {
      this._router.navigate(['home']);
    }
    else if(sessionStorage.getItem('forgot-email')=="null")
    {
      this._router.navigate(['home']);
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
      this.cId$ = this._customerService.resetPassword(this.reset);
  }
  }

  moveToLoginPage(id){
    if(id==100)
    {
      alert("Password Updated Successfull");
        //sessionStorage.setItem('forgot-email',null);
        this._router.navigate(['user-login']);
    }
    else
    {
      alert("Enter correct email");
    }

  }


}
