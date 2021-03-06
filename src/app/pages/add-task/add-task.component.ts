import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {v4 as uuidv4} from 'uuid';

import { Task } from 'src/app/models/task.model';

import { TodoListService } from 'src/app/services/todo-list.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskForm?: FormGroup;

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      'title': new FormControl(null),
      'description': new FormControl(null),
      'dueDate': new FormControl(null),
      'priority': new FormControl(null)
    })
  }

  onSubmit () {
    const id = uuidv4();
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

    this.todoListService.addTask(task).subscribe();
  }

}
