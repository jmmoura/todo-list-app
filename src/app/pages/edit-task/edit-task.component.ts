import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Task } from 'src/app/models/task.model';

import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  taskForm?: FormGroup;
  id: string | null | undefined;
  task$?: Observable<Task>;

  constructor(private todoListService: TodoListService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.task$ = this.todoListService.getTaskById(this.id);

    this.task$.subscribe();

    this.taskForm = new FormGroup({
      'title': new FormControl(null),
      'description': new FormControl(null),
      'dueDate': new FormControl(null),
      'priority': new FormControl(null)
    })
  }

  onSubmit () {
    const id = this.id;
    const title = this.taskForm?.controls['title'].value;
    const description = this.taskForm?.controls['description'].value;
    const dueDate = new Date(this.taskForm?.controls['dueDate'].value);
    const priority = this.taskForm?.controls['priority'].value;
    const labels = [ '' ];
    
    const task: Task = {
      id,
      title,
      description,
      dueDate,
      priority,
      labels
    }

    this.todoListService.updateTask(task).subscribe();
  }

}
