import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,NgForm, Validators } from '@angular/forms';
import {UserService} from "../user/user.service";
import {IPosts} from "./../posts";

@Component({
  selector: 'app-user',
  templateUrl: '../user/adduser.component.html',
  styleUrls: ['../user/user.component.css'],
  providers: [UserService]
})
export class AdduserComponent implements OnInit {
  
 title = 'Add User';
  
  test = 'Welcome';
  
  _postsArray: IPosts[];
  
  constructor(private userService: UserService) {
  }

  getPosts(): void {
      this.userService.getPosts()
          .subscribe(
              resultArray => this._postsArray = resultArray,
              error => console.log("Error :: " + error)
          )
  }

  ngOnInit(): void {
      this.getPosts();
  }
  
}
