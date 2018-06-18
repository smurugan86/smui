import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
                          /* { path: 'crisis-center', component: CrisisListComponent },
                           { path: 'hero/:id',      component: HeroDetailComponent },*/
                           {path: 'user', component: UserComponent},
                           {path: 'task', component: TaskComponent}
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
    TaskComponent
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
