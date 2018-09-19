import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { routing } from './app.routing';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [ { path: 'landing', loadChildren: 'app/landing/landing.module#LandingModule' }, 
                         { path: 'login', component: LoginComponent } ];


@NgModule({
  declarations: [
    AppComponent,   
    LoginComponent    
  ],
  imports: [   
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
