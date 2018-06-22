import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { AdduserComponent } from './user/adduser.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { EditUserComponent } from './edit-user/edit-user.component';



const appRoutes: Routes = [
                          /* { path: 'crisis-center', component: CrisisListComponent },
                           { path: 'hero/:id',      component: HeroDetailComponent },*/
                           {path: 'user', component: UserComponent},
                           {path: 'task', component: TaskComponent},
                           {path: 'adduser', component: AdduserComponent},
                           { path: 'userdetail/:id',      component: EditUserComponent },                           
                           { path: 'hero',      component: HeroDetailComponent }
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
    AdduserComponent,
    HeroDetailComponent,
    EditUserComponent
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
