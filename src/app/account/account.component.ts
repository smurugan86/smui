import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,NgForm, Validators } from '@angular/forms';
import {AccountService} from "../account/account.service";
import {Account} from "./account";
import {AccTotal} from "./acctotal";


@Component({
  selector: 'app-account',
  templateUrl: '../account/account.component.html',
  styleUrls: ['../account/account.component.css'],
  providers: [AccountService]
})

export class AccountComponent implements OnInit {
  
  title = 'Account--- List';
  
  test = 'Welcome';
  
  _postsArray: Account[];
  acctotal = new  AccTotal();
  
  constructor(private accountService: AccountService) {
  }

  getPosts(): void {
      this.accountService.getPosts()
          .subscribe(
              resultArray => this._postsArray = resultArray,
              error => console.log("Error :: " + error)
          )
  }

  ngOnInit(): void {
      this.getPosts();
      this.getTotal();
  }
  
  
  
  getTotal(): void {
       this.accountService.getTotal()
         .subscribe(
                  testtt => this.acctotal = testtt
          );
      
      
  }
  
  
}
