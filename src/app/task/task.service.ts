import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {Task} from "./task";
import { Headers, Http,Response } from '@angular/http';
import { Location } from '@angular/common';


@Injectable()
export class TaskService {

 
    private customersUrl = "http://localhost:6060/jer/rest/task/list";
    
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
  
  
  update(hero: Task): Promise<Task> {
      const url = `${this.customersUrl}/saveUser`;
      return this.http
        .post(url, JSON.stringify(hero), {headers: this.headers})
        .toPromise()
        .then(() => hero)
        .catch(this.handleError);
    }
  
  getUser(id: number): Promise<Task> {
      const url = `${this.customersUrl}/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Task)
        .catch(this.handleError);
    }

    updateUser(customer: Task): Promise<Task> {
      const url = `${this.customersUrl}/updateuser`;
      return this.http
        .post(url, JSON.stringify(customer), {headers: this.headers})
        .toPromise()
        .then(() => customer)
        .catch(this.handleError);
    }

    deleteUser(id: string): Promise<void> {
      const url = `${this.customersUrl}/deleteuser/${id}`;
      return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
    
  
}
