import { Injectable } from '@angular/core';


import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {ITask} from "../task/task";

@Injectable()
export class TaskService {

 
    private _postsURL = "http://localhost:6060/jer/rest/task/list";
    
      
  constructor(private http: Http) {
  }

  getPosts(): Observable<ITask[]> {
      return this.http
          .get(this._postsURL)
          .map((response: Response) => {
              return <ITask[]>response.json();
          })
          .catch(this.handleError);
  }

  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }
  
  
}
