import { Injectable } from '@angular/core';



import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {IPosts} from "./posts";
import { User } from './hero-detail/user';
import { Headers, Http,Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class AppService {

    private customersUrl = 'http://localhost:6060/jer/rest/user';  // URL to web API
   
    private headers = new Headers({'Content-Type': 'application/json'});
    
    
    constructor(private http: Http) { }

  
    private handleError(error: any): Promise<any> {
        console.error('Error', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
    
    update(hero: User): Promise<User> {
        const url = `${this.customersUrl}/saveUser`;
        return this.http
          .post(url, JSON.stringify(hero), {headers: this.headers})
          .toPromise()
          .then(() => hero)
          .catch(this.handleError);
      }
    
    getUser(id: number): Promise<User> {
        const url = `${this.customersUrl}/${id}`;
        return this.http.get(url)
          .toPromise()
          .then(response => response.json() as User)
          .catch(this.handleError);
      }

      updateUser(customer: User): Promise<User> {
        const url = `${this.customersUrl}/updateuser`;
        return this.http
          .post(url, JSON.stringify(customer), {headers: this.headers})
          .toPromise()
          .then(() => customer)
          .catch(this.handleError);
      }

      deleteUser(id: number): Promise<void> {
        const url = `${this.customersUrl}/deleteuser/${id}`;
        return this.http.delete(url, {headers: this.headers})
          .toPromise()
          .then(() => null)
          .catch(this.handleError);
      }

  
}
