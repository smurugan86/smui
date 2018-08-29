import { Component, OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Task} from "../task";

import {TaskService} from "../task.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  providers: [TaskService]
})
export class AddTaskComponent {

    heroForm: FormGroup;
   form: FormGroup;
submitted = false;
task = new Task();

//,

//private location2: Location;
//private taskService: TaskService;
//private fb2: FormBuilder,
/*constructor(private location2: Location,
private taskService: TaskService
       ) {
   
}*/

constructor(private taskService: TaskService,
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
    console.log(this.task); 
  }


onSubmit(): void {
    this.submitted = true;
    this.taskService.saveTask(this.task);
    console.log(this.task); 
  }

goBack(): void {
   this.location.back();
  }
 
}

