import { Component, OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from '../account';
import {AccountService} from "../account.service";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-account-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css'],
  providers: [AccountService]
})
export class EditAccountComponent {

    heroForm: FormGroup;
    form: FormGroup;
    //states = states;
    account = new Account();
    submitted = false;

constructor(
        private fb: FormBuilder,
        private taskService: AccountService,
        private route: ActivatedRoute,
        private location: Location) {
}

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.taskService.getTask(params['id']))
    .subscribe(task => this.account = task);
  }

   onSubmit(): void {
    this.submitted = true;
    this.taskService.updateTask(this.account);
    console.log(this.account);
  }
 
  delete(): void {
    this.taskService.deleteTask(this.account._id).then(() => this.goBack());
  }
 
  goBack(): void {
    this.location.back();
  }
  
}