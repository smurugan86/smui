import { Component, OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Task} from "../task";

import {TaskService} from "../task.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

   // heroForm: FormGroup;
   // form: FormGroup;
submitted = false;
//task = new Task();


/*constructor(private fb: FormBuilder,
        private taskService: TaskService,
        private location: Location) {
    // this.createForm();  
}*/


/*
createForm() {
  this.heroForm = this.fb.group({ // <-- the parent FormGroup
    empname: ['', Validators.required ]    
  });
}
 
openDialog() {
    console.log(this.task); 
  }


onSubmit(): void {
    this.submitted = true;
    this.taskService.update(this.task);
    console.log(this.task); 
  }

goBack(): void {
    this.location.back();
  }*/
 
}

