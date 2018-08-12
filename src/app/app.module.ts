import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NoteComponent } from './note/note.component';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './task/add-task/add-task.component';

import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
//import {MdDialogModule} from '@angular/material';


const appRoutes: Routes = [                          
                           {path: 'user', component: UserComponent},                                                  
                           {path: 'adduser', component: AddUserComponent},
                           {path: 'userdetail/:id',      component: EditUserComponent },                           
                           {path: 'note', component: NoteComponent},                           
                           {path: 'task', component: TaskComponent,
                               children: [                                        
                                          { path: 'addtask', component: AddTaskComponent }
                                        ]
                           }
                                                      
                           /*{ path: 'crisis-center', component: CrisisListComponent },
                           { path: 'hero/:id',      component: HeroDetailComponent },*/
                           //{path: 'task', component: TaskComponent},
                          // {path: 'task/addtask', component: AddTaskComponent},                           
                         /*  {
                             path: 'heroes',
                             component: HeroListComponent,
                             data: { title: 'Heroes List' }
                           },
                           { path: '',
                             redirectTo: '/heroes',
                             pathMatch: 'full'
                           },
                           { path: '**', component: PageNotFoundComponent }*/
                         ];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TaskComponent,    
    AddUserComponent,
    EditUserComponent,
    NoteComponent,
    AddTaskComponent
  ],
  imports: [           
        RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      ),
      // other imports here
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
