import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TimesheetModule } from '../timesheet/timesheet.module';
import { TodoListModule } from '../todo-list/todo-list.module';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TimesheetComponent } from '../timesheet/timesheet.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TimesheetModule,
    TodoListModule,
  ]
})
export class HomeModule { }
