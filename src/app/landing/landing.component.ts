import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [LoginService]
})
export class LandingComponent implements OnInit {

  constructor(private loginService: LoginService,private router: Router) { }
  userName = '';
  
  ngOnInit() {
      this.router.navigate( ['/landing/user'] );
      this.userName = localStorage.getItem("userName");
     // let userInfo = localStorage.getItem("userInfo");
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if ( userInfo != null ) {
          //alert(userInfo);
          console.log('res is ', userInfo);
          //this.router.navigate( ['/landing/user'] );
      }
      else {
         // this.router.navigate( ['/login'] );
      }
      
  }
  
  logout():void{
      this.loginService.logout();
      this.router.navigate( ['/login'] );
  }

}
