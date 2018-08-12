import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "app/app.component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./task/task.component";


const appRoutes: Routes = [
    { path: 'app', component: AppComponent},
    { path: 'user', component: UserComponent},
    { path: 'task', component: TaskComponent}
 ]


export const routing = RouterModule.forRoot(appRoutes);