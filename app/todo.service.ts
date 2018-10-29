import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  uri = 'http://localhost:3000/api';
  postUri = 'http://localhost:3000/api/insert';
  constructor(private http: HttpClient) { }

  getData(): Observable <User[]>{
    return this.http.get<User[]>(this.uri);
  }
  insertData(data: User){
    return this.http.post(this.postUri, data);
  }
}
