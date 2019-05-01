import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {Account} from "./account";
import {AccTotal} from "./acctotal";
import { Headers, Http,Response } from '@angular/http';
import { Location } from '@angular/common';


@Injectable()
export class AccountService {

    private customersUrl = "http://localhost:6060/jer/rest/account/list";
    private accountUrl = 'http://localhost:6060/jer/rest/account';
    
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) {}

  getPosts(): Observable<Account[]> {
      
      const userId = localStorage.getItem('userId');
      const url = `${this.customersUrl}/${userId}`;
      
      return this.http
          .get(url)
          .map((response: Response) => {
              return <Account[]>response.json();
          })
          .catch(this.handleError);
  }
  
  
  getTotal(): Observable<AccTotal> {
      const userId = localStorage.getItem('userId');
      const url = `${this.accountUrl}/getTotalAccount/${userId}`;
      return this.http.get(url)
        .map(response => response.json() as AccTotal)
        .catch(this.handleError);
    }
  

  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }
  
  
  saveTask(hero: Account): Promise<Account> {
      const url = `${this.accountUrl}/saveAccount`;
      return this.http
        .post(url, JSON.stringify(hero), {headers: this.headers})
        .toPromise()
        .then(() => hero)
        .catch(this.handleError);
    }
  
  getTask(id: number): Promise<Account> {
      const url = `${this.accountUrl}/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Account)
        .catch(this.handleError);
    }

    updateTask(customer: Account): Promise<Account> {
      const url = `${this.accountUrl}/updateAccount`;
      return this.http
        .post(url, JSON.stringify(customer), {headers: this.headers})
        .toPromise()
        .then(() => customer)
        .catch(this.handleError);
    }

    deleteTask(id: string): Promise<void> {
      const url = `${this.accountUrl}/deleteTask/${id}`;
      return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
    
    getTaskDetails(){
        
    }
  
}
