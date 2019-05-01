import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,NgForm, Validators } from '@angular/forms';
import {NoteService} from "../note/note.service";


@Component({
  selector: 'app-note',
  templateUrl: '../note/note.component.html',
  styleUrls: ['../note/note.component.css'],
  providers: [NoteService]
})
export class NoteComponent implements OnInit {
  
    title = 'note List';
  
    test = 'Welcome';
  
  
  constructor(private noteService: NoteService) {
  }

  /*getPosts(): void {
      this.noteService.getPosts()
          .subscribe(
              resultArray => this._postsArray = resultArray,
              error => console.log("Error :: " + error)
          )
  }*/

  ngOnInit(): void {
     // this.getPosts();
      console.log('note loaded ');
  }
  
}
