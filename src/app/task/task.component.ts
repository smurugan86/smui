import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,NgForm, Validators } from '@angular/forms';
import {TaskService} from "../task/task.service";
import {ITask} from "../task/task";

@Component({
  selector: 'app-task',
  templateUrl: '../task/task.component.html',
  styleUrls: ['../task/task.component.css'],
  providers: [TaskService]
})
export class TaskComponent implements OnInit {
  
 title = 'Task List';
  
  test = 'Welcome';
  
  _postsArray: ITask[];
  
  constructor(private taskService: TaskService) {
  }

  getPosts(): void {
      this.taskService.getPosts()
          .subscribe(
              resultArray => this._postsArray = resultArray,
              error => console.log("Error :: " + error)
          )
  }

  ngOnInit(): void {
      this.getPosts();
  }
  
}
