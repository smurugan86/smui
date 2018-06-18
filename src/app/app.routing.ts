import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "app/app.component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./task/task.component";
//import { EmployeeRegisterComponent } from "app/empform.component";
//import { DepartmentComponent } from "app/department.component";
//import { OfficeComponent } from "app/office.component";

const appRoutes: Routes = [
    { path: 'app', component: AppComponent},
    { path: 'user', component: UserComponent},
    { path: 'task', component: TaskComponent}
    //{ path: 'department', component: DepartmentComponent},
    //{ path: 'office', component: OfficeComponent},
    //{ path: 'skill', loadChildren: 'app/skill/skill.module#SkillModule' }

 ]


export const routing = RouterModule.forRoot(appRoutes);