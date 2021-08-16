import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSignUp } from '../Extra ts files/UserSignUp';
import { CustomerServiceService } from '../Service/customer-service.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  
  registerform:FormGroup;
  userSignUp : UserSignUp;
  constructor(
    private _customerService : CustomerServiceService,
    private _router : Router,
    private formBuilder:FormBuilder
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
    this.registerform=this.formBuilder.group({
        pass1:['',[Validators.required,Validators.minLength(6),Validators.maxLength(14)]],
        username:['',[Validators.required,Validators.minLength(2)]],
        mob:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
        mail:['',[Validators.required,Validators.email]],
        useraddress:['',[Validators.required,Validators.maxLength(80)]]
    });
  }

  register()
  {
    this._customerService.addNewUser(this.userSignUp)
    .subscribe(data=>
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