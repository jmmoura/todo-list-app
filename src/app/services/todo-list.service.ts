import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../models/task.model';

const URL = 'http://madsti.com.br:9099/api/v0/todos/'

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<Task[]>(URL);
  }

  getTaskById(id: string | null | undefined) {
    return this.http.get<Task>(URL + id);
  }

  addTask(task: Task) {
    return this.http.post<Task>(URL, task);
  }

  updateTask(task: Task) {
    return this.http.put<Task>(URL, task);
  }

  deleteTask(id: string | null | undefined) {
    return this.http.delete(URL + id);
  }
}
