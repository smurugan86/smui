import { Component, OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import {AppService} from "../../app.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

    heroForm: FormGroup;
    form: FormGroup;
submitted = false;
user = new User();


constructor(private fb: FormBuilder,
        private appService: AppService,
        private location: Location) {
  this.createForm();
  
}


/*constructor(
        private dataService: DataService,
        private route: ActivatedRoute,
        private location: Location
      ) {}*/

createForm() {
  this.heroForm = this.fb.group({ // <-- the parent FormGroup
    empname: ['', Validators.required ]    
  });
}
 
openDialog() {
   // this.payLoad = JSON.stringify(this.form.value);
    
    //console.log(this.heroForm.value); 
    console.log(this.user); 
  }


onSubmit(): void {
    this.submitted = true;
     this.appService.update(this.user);
    console.log(this.user); 
  }

goBack(): void {
    this.location.back();
  }
 
}

/*export class HeroDetailComponent{
    name = new FormControl();
}*/

/*export class HeroDetailComponent4 {
    heroForm: FormGroup;
    states = states;

    constructor(private fb: FormBuilder) {
      this.createForm();
    }

    createForm() {
      this.heroForm = this.fb.group({
        name: ['', Validators.required ],
        street: '',
        city: '',
        state: '',
        zip: '',
        power: '',
        sidekick: ''
      });
    }
  }*/
