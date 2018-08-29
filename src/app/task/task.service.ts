import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {Task} from "./task";
import { Headers, Http,Response } from '@angular/http';
import { Location } from '@angular/common';


@Injectable()
export class TaskService {

 
    private customersUrl = "http://localhost:6060/jer/rest/task/list";
    private taskUrl = 'http://localhost:6060/jer/rest/task';
    
    private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {
  }

  getPosts(): Observable<Task[]> {
      return this.http
          .get(this.customersUrl)
          .map((response: Response) => {
              return <Task[]>response.json();
          })
          .catch(this.handleError);
  }

  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }
  
  
  saveTask(hero: Task): Promise<Task> {
      const url = `${this.taskUrl}/saveTask`;
      return this.http
        .post(url, JSON.stringify(hero), {headers: this.headers})
        .toPromise()
        .then(() => hero)
        .catch(this.handleError);
    }
  
  getTask(id: number): Promise<Task> {
      const url = `${this.taskUrl}/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Task)
        .catch(this.handleError);
    }

    updateTask(customer: Task): Promise<Task> {
      const url = `${this.taskUrl}/updateTask`;
      return this.http
        .post(url, JSON.stringify(customer), {headers: this.headers})
        .toPromise()
        .then(() => customer)
        .catch(this.handleError);
    }

    deleteTask(id: string): Promise<void> {
      const url = `${this.taskUrl}/deleteTask/${id}`;
      return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
    
  
}
