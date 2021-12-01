import { Component, Input, OnInit } from '@angular/core';

import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'pages-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input('task') task?: Task

  constructor() { }

  ngOnInit(): void {
    console.log(this.task)
  }

}
