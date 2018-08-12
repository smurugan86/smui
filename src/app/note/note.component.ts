import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,NgForm, Validators } from '@angular/forms';
import {NoteService} from "../note/note.service";
import {IPosts} from "./../posts";

@Component({
  selector: 'app-note',
  templateUrl: '../note/note.component.html',
  styleUrls: ['../note/note.component.css'],
  providers: [NoteService]
})
export class NoteComponent implements OnInit {
  
 title = 'note List';
  
  test = 'Welcome';
  
  _postsArray: IPosts[];
  
  constructor(private noteService: NoteService) {
  }


  ngOnInit(): void {
     
  }
  
}
