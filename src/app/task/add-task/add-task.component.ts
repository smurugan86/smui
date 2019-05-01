import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

    taskForm: FormGroup;
    form: FormGroup;
    submitted = false;
    task = new Task();

    
    ngOnInit(): void {
        this.taskForm = new FormGroup({
          'title': new FormControl(this.task.title,Validators.required ),
          'description': new FormControl(this.task.description, Validators.required),
          'userStory': new FormControl(this.task.userStory, Validators.required),
          '_id': new FormControl(''),
          'userId': new FormControl(''),
          'taskDate': new FormControl('')
        });

      }
   
      
      get title() { return this.taskForm.get('title'); }

      get userStory() { return this.taskForm.get('userStory'); }
      
      get description() { return this.taskForm.get('description'); }
      
      get userId() { return this.taskForm.get('userId'); }
      
      get taskDate() { return this.taskForm.get('taskDate'); }
      
      get _id() { return this.taskForm.get('_id'); }
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
    if (this.taskForm.valid) {
        this.submitted = true;
        this.task = new Task(this.taskForm.value);
        this.task.userId=localStorage.getItem('userId');
        this.taskService.saveTask(this.task);
        console.log(this.task.userStory);
        console.log(this.task.userId); 
        console.log(this.taskForm.value); 
        this.taskForm.reset();
      }else{
          this.submitted = false;
      }
  }

goBack(): void {
   this.location.back();
  }
 
}

