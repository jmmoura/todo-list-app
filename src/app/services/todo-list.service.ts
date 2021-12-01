import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../models/task.model';

const URL = 'http://madsti.com.br:9099/api/v0/todos'

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<Task[]>(URL);
  }
}
