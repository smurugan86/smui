import { Component, OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../task';
import {TaskService} from "../task.service";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
  providers: [TaskService]
})
export class EditTaskComponent {

    heroForm: FormGroup;
    form: FormGroup;
    //states = states;
    task = new Task();
    submitted = false;

constructor(
        private fb: FormBuilder,
        private taskService: TaskService,
        private route: ActivatedRoute,
        private location: Location) {
}

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.taskService.getTask(params['id']))
    .subscribe(task => this.task = task);
  }

   onSubmit(): void {
    this.submitted = true;
    this.taskService.updateTask(this.task);
    console.log(this.task);
  }
 
  delete(): void {
    this.taskService.deleteTask(this.task._id).then(() => this.goBack());
  }
 
  goBack(): void {
    this.location.back();
  }
  
}