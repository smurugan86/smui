import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,NgForm, Validators } from '@angular/forms';
import {AppService} from "./app.service";
import {IPosts} from "./posts";
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [AppService]
})

export class AppComponent implements OnInit {
    
    title = 'Home';
    usr_tab = "active";
    
    
    
    constructor(private router: Router) { }

    ngOnInit() {
        
        
       /* let userInfo = localStorage.getItem("userInfo");
        if ( userInfo != null ) {
            this.router.navigate( ['/login'] );
        }
        else {*/
            this.router.navigate( ['/login'] );
            localStorage.removeItem('currentUser');
            localStorage.removeItem('userInfo');
            localStorage.clear();
        //}
    }
    
    

        
      
}
 /* 
  */

