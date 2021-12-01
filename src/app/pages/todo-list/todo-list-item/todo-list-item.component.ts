import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from 'src/app/models/task.model';

import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'pages-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input('task') task?: Task;
  @Output() warnTaskWasDeleted: EventEmitter<any> = new EventEmitter();

  constructor(private todoListService: TodoListService, private router: Router) { }

  ngOnInit(): void {
  }

  goToEditTask() {
    this.router.navigate(['edit-task/' + this.task?.id]);
  }

  onDelete() {
    this.todoListService.deleteTask(this.task?.id).subscribe();

    this.warnTaskWasDeleted.emit();
  }

}
