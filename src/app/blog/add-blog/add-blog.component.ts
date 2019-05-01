import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Blog} from "../blog";

import {BlogService} from "../blog.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
  providers: [BlogService]
})
export class AddBlogComponent {

    blogForm: FormGroup;
    form: FormGroup;
    submitted = false;
    blog = new Blog();

    
    ngOnInit(): void {
        this.blogForm = new FormGroup({
          'title': new FormControl(this.blog.title,Validators.required ),
          'description': new FormControl(this.blog.description, Validators.required),          
          '_id': new FormControl(''),
          'userId': new FormControl(''),
          'blogDate': new FormControl('')
        });

      }
   
      
      get title() { return this.blogForm.get('title'); }

      get userStory() { return this.blogForm.get('userStory'); }
      
      get description() { return this.blogForm.get('description'); }
      
      get userId() { return this.blogForm.get('userId'); }
      
      get blogDate() { return this.blogForm.get('blogDate'); }
      
      get _id() { return this.blogForm.get('_id'); }
//,

//private location2: Location;
//private taskService: TaskService;
//private fb2: FormBuilder,
/*constructor(private location2: Location,
private taskService: TaskService
       ) {
   
}*/

constructor(private blogService: BlogService,
        private location: Location) {
  //this.createForm();
}

/*constructor(
        private dataService: DataService,
        private route: ActivatedRoute,
        private location: Location
      ) {}*/

/*createForm() {
  this.heroForm = this.fb.group({ // <-- the parent FormGroup
    empname: ['', Validators.required ]    
  });
}*/



/*createForm() {
  this.heroForm = this.fb.group({ // <-- the parent FormGroup
    empname: ['', Validators.required ]    
  });
}*/
 
openDialog() {
    console.log(this.blog); 
  }


onSubmit(): void {
    if (this.blogForm.valid) {
        this.submitted = true;
        this.blog = new Blog(this.blogForm.value);
        this.blog.userId=localStorage.getItem('userId');
        this.blogService.saveBlob(this.blog);
        
        console.log(this.blog.userId); 
        console.log(this.blogForm.value); 
        this.blogForm.reset();
      }else{
          this.submitted = false;
      }
  }

goBack(): void {
   this.location.back();
  }
 
}

