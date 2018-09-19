import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { LandingComponent } from '../landing/landing.component';
import { ModuleWithProviders } from "@angular/core";
import {ReactiveFormsModule} from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NoteComponent } from '../note/note.component';
import { TaskComponent } from '../task/task.component';
import { AddTaskComponent } from '../task/add-task/add-task.component';
import { AccountComponent } from '../account/account.component';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from '../user/add-user/add-user.component';
import { EditUserComponent } from '../user/edit-user/edit-user.component';
import { EditTaskComponent } from '../task/edit-task/edit-task.component';

const dashboardRouting: ModuleWithProviders = RouterModule.forChild([
{path: '', component: LandingComponent,
    children :[
    {path: 'user', component: UserComponent},                                        
    {path: 'adduser', component: AddUserComponent},
    {path: 'userdetail/:id',      component: EditUserComponent },                           
    {path: 'note', component: NoteComponent},
    {path: 'newtask', component: AddTaskComponent},
    {path: 'task', component: TaskComponent},
    {path: 'gettask/:id',      component: EditTaskComponent },
    {path: 'account', component: AccountComponent}
    ]
},
]);
        

@NgModule({
    declarations: [
          LandingComponent,
          UserComponent,
          TaskComponent,    
          AddUserComponent,
          EditUserComponent,
          NoteComponent,
          AddTaskComponent,
          EditTaskComponent,
          AccountComponent      
    ],
    imports: [   
              dashboardRouting,
              CommonModule,
              FormsModule,
              HttpModule,
              ReactiveFormsModule
      
    ],
    providers: [],
    bootstrap: []
  })
  
export class LandingModule {
    
    
}
