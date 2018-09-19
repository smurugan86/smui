import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,NgForm, Validators } from '@angular/forms';
import {AccountService} from "../account/account.service";
import {Account} from "./account";

@Component({
  selector: 'app-account',
  templateUrl: '../account/account.component.html',
  styleUrls: ['../account/account.component.css'],
  providers: [AccountService]
})

export class AccountComponent implements OnInit {
  
 title = 'Task List';
  
  test = 'Welcome';
  
  _postsArray: Account[];
  
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
  }
  
}
