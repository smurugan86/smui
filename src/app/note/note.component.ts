import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,NgForm, Validators } from '@angular/forms';
import {UserService} from "../user/user.service";
import {IPosts} from "./../posts";

@Component({
  selector: 'app-user',
  templateUrl: '../user/user.component.html',
  styleUrls: ['../user/user.component.css'],
  providers: [UserService]
})
export class NoteComponent implements OnInit {
  
 title = 'User List';
  
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
