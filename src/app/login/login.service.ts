import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { Headers, Http,Response } from '@angular/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService {

  constructor(private http: Http) { }
  private customersUrl = 'http://localhost:6060/jer/rest/user';  // URL to web API
  
  private headers = new Headers({'Content-Type': 'application/json'});
  
  userrr = new User()
  
  /*
  getPosts(): Observable<IPosts[]> {
      return this.http
          .get(this._postsURL)
          .map((response: Response) => {
              return <IPosts[]>response.json();
          })
          .catch(this.handleError);
  }*/
  
  doLogin(hero: User):  Observable<User> {
      const url = `${this.customersUrl}/login`;
      return this.http
        .post(url, JSON.stringify(hero), {headers: this.headers})
        .map((response: Response) => {
              return <User>response.json();
          })
          .catch(this.handleError);
      
      
      /*const url = `${this.customersUrl}/0c3934ff-d023-416c-837b-a7858733cae1`;
      return this.http.get(url)
      .map((response: Response) => {
              return <User>response.json();
          })
          .catch(this.handleError);*/
    }
  
  logout() {
      // remove user from local storage to log user out
      let userInfo = localStorage.getItem("currentUser");
      console.log(userInfo);
      alert("Logout Success");
      localStorage.removeItem('userInfo');
      localStorage.clear();
      
      let userInfos = localStorage.getItem("currentUser");
      console.log(userInfos);
  }
  
  private handleError(error: any): Promise<any> {
      console.error('Error', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
  
}
