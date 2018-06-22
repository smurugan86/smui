import { Component, OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../hero-detail/user';
import {AppService} from "./../app.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {

    heroForm: FormGroup;
    form: FormGroup;
//states = states;
user = new User();


constructor(private fb: FormBuilder,private appService: AppService) {
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
    //this.submitted = true;
     this.appService.update(this.user);
    console.log(this.user); 
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
