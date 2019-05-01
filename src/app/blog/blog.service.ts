import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {Blog} from "./blog";
import { Headers, Http,Response } from '@angular/http';
import { Location } from '@angular/common';


@Injectable()
export class BlogService {

 
    private customersUrl = "http://localhost:6060/jer/rest/blog/list";
    private blogUrl = 'http://localhost:6060/jer/rest/blog';
    
    private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {
  }

  getPosts(): Observable<Blob[]> {
      const userId = localStorage.getItem('userId');
      const url = `${this.customersUrl}/${userId}`;
      
      return this.http
          .get(url)
          .map((response: Response) => {
              return <Blob[]>response.json();
          })
          .catch(this.handleError);
  }

  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }
  
  
  saveBlob(hero: Blog): Promise<Blog> {
      const url = `${this.blogUrl}/saveBlog`;
      return this.http
        .post(url, JSON.stringify(hero), {headers: this.headers})
        .toPromise()
        .then(() => hero)
        .catch(this.handleError);
    }
  
  getBlob(id: number): Promise<Blog> {
      const url = `${this.blogUrl}/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Blog)
        .catch(this.handleError);
    }

    updateBlob(customer: Blog): Promise<Blog> {
      const url = `${this.blogUrl}/updateBlog`;
      return this.http
        .post(url, JSON.stringify(customer), {headers: this.headers})
        .toPromise()
        .then(() => customer)
        .catch(this.handleError);
    }

    deleteBlob(id: string): Promise<void> {
      const url = `${this.blogUrl}/deleteBlog/${id}`;
      return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
    
  
}
