import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,NgForm, Validators } from '@angular/forms';
import {BlogService} from "./blog.service";
import {Blog} from "./blog";

@Component({
  selector: 'app-blog',
  templateUrl: '../blog/blog.component.html',
  styleUrls: ['../blog/blog.component.css'],
  providers: [BlogService]
})
export class BlogComponent implements OnInit {
  
   title = 'blob List';
  
  test = 'Welcome';
  
 usr_tab = "active";
  
  _postsArray: Blob[];
  
  constructor(private blogService: BlogService) {
  }

  getPosts(): void {
      this.blogService.getPosts()
          .subscribe(
              resultArray => this._postsArray = resultArray,
              error => console.log("Error :: " + error)
          )
  }

  ngOnInit(): void {
      this.getPosts();
  }
  
}
