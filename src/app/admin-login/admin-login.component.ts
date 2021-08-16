import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerServiceService } from '../Service/customer-service.service';
import { Login } from '../Extra ts files/Login';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  login: Login;
  email: string = "";
  password: string = "";
  uId$ : Observable<number>;

  constructor
    (private formBuilder: FormBuilder,
    private _customerService : CustomerServiceService,
    private _router : Router) { }

  ngOnInit(): void {
    if(parseInt(sessionStorage.getItem('admin'))>0)
    {
      alert("Already Logged In");
      this._router.navigate(['home']);
    }
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(2)]]
  });
  }

  loginUser()
  {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
else{
    
    this.login = new Login();
    this.login.email = this.email;
    this.login.password = this.password;
    if(this.login.email=='lydia@gmail.com' && this.login.password=='lydia123')
    {
      sessionStorage.setItem('admin','1');
      this._router.navigate(['admin-profile']);
    }
    else
    {
      alert('Admin Not Found');
    }}
  }
  moveToHomePage(id)
  {
    if(id<0)
    {
      alert('User Not Found');
      this.uId$ = null;
      return;
    }
    sessionStorage.setItem('user',id);
    this._router.navigate(['home']);
  }
  get f() { return this.registerForm.controls; }



}