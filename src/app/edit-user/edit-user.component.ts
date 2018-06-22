import { Component, OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user/user';
import {AppService} from "./../app.service";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

    heroForm: FormGroup;
    form: FormGroup;
    //states = states;
    user = new User();
    submitted = false;

constructor(
        private fb: FormBuilder,
        private appService: AppService,
        private route: ActivatedRoute,
        private location: Location) {
}

ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.appService.getUser(params['id']))
    .subscribe(user => this.user = user);
  }

   onSubmit(): void {
    this.submitted = true;
    this.appService.updateUser(this.user);
    console.log(this.user);
  }
 
  /*delete(): void {
    this.appService.deleteUser(this.user.id).then(() => this.goBack());
  }*/
 
  goBack(): void {
    this.location.back();
  }
  
}