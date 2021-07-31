import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesheetRoutingModule } from './timesheet-routing.module';
import { TimesheetComponent } from './timesheet.component';
import { TimesheetService } from 'src/app/service/timesheet.service';
import { SortDirective } from 'src/app/directive/sort.directive';


@NgModule({
  declarations: [TimesheetComponent,
    SortDirective
  ],
  imports: [
    CommonModule,
    TimesheetRoutingModule
  ],
  providers: [
    TimesheetService
  ],
  exports: [
    TimesheetComponent
  ]
})
export class TimesheetModule { }
