import { Component, OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blog } from '../blog';
import {BlogService} from "../blog.service";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css'],
  providers: [BlogService]
})
export class EditBlogComponent {

    heroForm: FormGroup;
    form: FormGroup;
    //states = states;
    blog = new Blog();
    submitted = false;

constructor(
        private fb: FormBuilder,
        private blogService: BlogService,
        private route: ActivatedRoute,
        private location: Location) {
}

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.blogService.getBlob(params['id']))
    .subscribe(blog => this.blog = blog);
  }

   onSubmit(): void {
    this.submitted = true;
    this.blogService.updateBlob(this.blog);
    console.log(this.blog);
  }
 
  delete(): void {
    this.blogService.deleteBlob(this.blog._id).then(() => this.goBack());
  }
 
  goBack(): void {
    this.location.back();
  }
  
}