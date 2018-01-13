import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Todo } from './todo';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  public getTodosForUser(userId: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`https://jsonplaceholder.typicode.com/users/${userId}/todos`, {
      headers: new HttpHeaders().set('Accept', 'application/json')
    })
    .catch( error => Observable.throw(error));
    
  }
}
