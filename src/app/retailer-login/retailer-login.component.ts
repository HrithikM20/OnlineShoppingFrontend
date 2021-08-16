import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../Extra ts files/Login';
import { RetailerServiceService } from '../Service/retailer-service.service';


@Component({
  selector: 'app-retailer-login',
  templateUrl: './retailer-login.component.html',
  styleUrls: ['./retailer-login.component.css']
})
export class RetailerLoginComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;

  login: Login;
  email: string = "";
  password: string = "";
  uId$ : Observable<number>;

  constructor
    (private formBuilder: FormBuilder,
      private _retailerService : RetailerServiceService,
    private _router : Router) { }

  ngOnInit(): void {
    if(parseInt(sessionStorage.getItem('retailer'))>0)
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
    this.uId$ = this._retailerService.login(this.login);
    //alert(this.login.email);
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
    sessionStorage.setItem('retailer',id);
    this._router.navigate(['retailer-profile']);
  }

  get f() { return this.registerForm.controls; }

  forgotPassword(){
    this._router.navigate(['retailer-forgot']);
  }

}