import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from "./login.service";
import { User } from '../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,private router: Router) { }
  user = new User();
  reData = new User();
  
  userName = '';
  password = '';
  
  ngOnInit() {
      
  }
  
  gologin(){
      this.router.navigate(['/landing'])
  }
  
  
  onSubmit(): void {
      //this.submitted = true;
      console.log(this.user.email);
      console.log(this.user.password);
      
      
      this.loginService.doLogin(this.user).subscribe(
              (res: User) => {
                  let jsonobj = { "_id": res._id, "email": res.email, "firstName": res.firstName, 
                          "lastName": res.lastName, "status": res.status, "userRole": res.userRole };
                  localStorage.setItem( "userInfo", JSON.stringify(jsonobj));
                  
                  localStorage.setItem('userId', res._id);
                  localStorage.setItem('userName', res.firstName+' '+res.lastName);
                  
                  console.log('User name is ', res.firstName);
                  if ( res.userRole != null ) {
                      console.log('res is ', res.userRole);
                      this.router.navigate( ['/landing/user'] );
                  }else{
                      this.router.navigate( ['/login'] );
                  }
                },
                error => {
                  alert("ERROR");
                  this.router.navigate( ['/login'] );
                });
      
     /* for (let i = 0; i < localStorage.length; i++){
          let key = localStorage.key(i);
          let value = localStorage.getItem(key);
          console.log(key, value);
        }*/
      
      
     // let item = JSON.parse(localStorage.getItem("currentUser"));
      
     // console.log(item);
      
     
      
      
      
      /*.subscribe((response) => {
          localStorage.setItem('loginSessId', user.email);
      },
        (err) => console.log(err)
      );*/
      //.subscribe(user => this.user = user);
      
      
     
      
    }
  
  
  logout():void{
      this.loginService.logout();
  }
  
  
}
