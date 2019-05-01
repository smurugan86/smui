import { Component, OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Account} from "../account";

import {AccountService} from "../account.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
  providers: [AccountService]
})
export class AddAccountComponent {

    heroForm: FormGroup;
   form: FormGroup;
submitted = false;
account = new Account();
accTypes : string [] = ['Credit', 'Debit'];
//,

//private location2: Location;
//private taskService: TaskService;
//private fb2: FormBuilder,
/*constructor(private location2: Location,
private taskService: TaskService
       ) {
   
}*/

constructor(private accountService: AccountService,
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
    console.log(this.account); 
  }


onSubmit(): void {
    this.submitted = true;
    this.account.userId=localStorage.getItem('userId');
    this.accountService.saveTask(this.account);
    console.log(this.account); 
  }

goBack(): void {
   this.location.back();
  }
 
}

