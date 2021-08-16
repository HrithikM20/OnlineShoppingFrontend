import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSignUp } from '../Extra ts files/UserSignUp';
import { CustomerServiceService } from '../Service/customer-service.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
 
  userSignUp : UserSignUp;
  constructor(
    private _customerService : CustomerServiceService,
    private _router : Router
  ) 
  {
    this.userSignUp = new UserSignUp();
  }

  ngOnInit(): void
  {
    if(parseInt(sessionStorage.getItem('user'))>0)
    {
      alert('Already Logged In');
      this._router.navigate(['home']);
    }
  }

  register()
  {
    this._customerService.addNewUser(this.userSignUp).subscribe(data=>
      {
        if(data == -1)
        { 
          alert("User Already Registered");
        }
        else
        {
          alert("Registration Successful");
          this._router.navigate(['user-login']);
        }
      });
  }
}
