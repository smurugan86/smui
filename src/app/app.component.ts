import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,NgForm, Validators } from '@angular/forms';
import {AppService} from "./app.service";
import {IPosts} from "./posts";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent implements OnInit {
    
    title = 'Home';
    
    constructor() { }

    ngOnInit() {
    }

        
      
}
 /* 
  */

