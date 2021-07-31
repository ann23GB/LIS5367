  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoDetailRoutingModule } from './todo-detail-routing.module';
import { TodoDetailComponent } from './todo-detail.component';
import { TodoService } from '../../service/todo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TodoDetailRoutingModule
  ],
  declarations: [TodoDetailComponent],
  providers: [
    TodoService
  ]
})
export class TodoDetailModule { }