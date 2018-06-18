import { Injectable } from '@angular/core';


import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {IPosts} from "./../posts";

@Injectable()
export class NoteService {

  
/*  angular.module('demo', [])
  .controller('Hello', function($scope, $http) {
      $http.get('http://rest-service.guides.spring.io/greeting').
          then(function(response) {
              $scope.greeting = response.data;
          });
  });*/
  
    private _postsURL = "http://localhost:6060/jer/rest/user/list";
    
    //private _postsURL = "https://jsonplaceholder.typicode.com/posts";
  
  constructor(private http: Http) {
  }

  getPosts(): Observable<IPosts[]> {
      return this.http
          .get(this._postsURL)
          .map((response: Response) => {
              return <IPosts[]>response.json();
          })
          .catch(this.handleError);
  }

  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }
  
  
}
