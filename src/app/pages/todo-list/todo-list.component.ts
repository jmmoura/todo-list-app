import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TodoListService } from 'src/app/services/todo-list.service';

import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'pages-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoListService]
})
export class TodoListComponent implements OnInit {
  tasksList$?: Observable<Task[]>;

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.tasksList$ = this.todoListService.getTasks();

    this.tasksList$.subscribe()
  }

}
