import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../Extra ts files/Login';
import { CustomerServiceService } from '../Service/customer-service.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
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
  if(parseInt(sessionStorage.getItem('user'))>0)
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
  this.uId$ = this._customerService.login(this.login);
  
 // alert(this.login.email);
 //alert("log in succesfull");
}
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
  //console.log(id);

  this._router.navigate(['home']);
}

forgotPassword()
{
  this._router.navigate(['reset-password']);
}
register(){
  this._router.navigate(['register-user']);
}

  get f() { return this.registerForm.controls; 
  }

  
}
