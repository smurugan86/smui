import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';

@NgModule({
  imports: [
    CommonModule,
    UserComponent
  ],
  declarations: [UserComponent]
})

export class NoteModule { }
