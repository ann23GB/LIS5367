import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../../service/todo.service';


@NgModule({
  declarations: [TodoListComponent],
  providers: [
    TodoService
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule
  ],
  exports: [
    TodoListComponent
  ]
})
export class TodoListModule { }
