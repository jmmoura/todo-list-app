import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';

const routes: Routes = [
  { path: 'tasks-list', component: TodoListComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: '**', redirectTo: 'tasks-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
