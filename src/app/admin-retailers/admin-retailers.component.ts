import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Retailer } from '../Extra ts files/RetailerSignUp';
import { RetailerServiceService } from '../Service/retailer-service.service';

@Component({
  selector: 'app-admin-retailers',
  templateUrl: './admin-retailers.component.html',
  styleUrls: ['./admin-retailers.component.css']
})
export class AdminRetailersComponent implements OnInit {

  retailers : Retailer[] = [];
  constructor
  (
    private _router : Router,
    private _retailerService : RetailerServiceService
  ) { }

  ngOnInit(): void
  {
    if(sessionStorage.getItem('admin')=="null")
    {
      alert("Admin Not Logged In");
      this._router.navigate(['home']);
    }
    else
    {
      this._retailerService.showAllRetailers()
      .subscribe(data=>
        {
          this.retailers = data;
        });
    }
  }
xdata:string;
  deleteEmployee(rid: number)
  {
  console.log('emp number to delete '+rid);
  this._retailerService.deleteRetailerById(rid).
  subscribe((data) =>
  {
    this.xdata=data;
   console.log(this.xdata);
  }, (err) => {
  console.log(err + ' error '+this.retailers);
  });
  
   
  //this.loadAllEmployees();
  //window.location.reload();
  } //end of delete

  
}
