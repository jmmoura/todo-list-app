import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoListItemComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PagesModule { }
