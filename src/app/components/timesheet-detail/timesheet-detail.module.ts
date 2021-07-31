import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TimesheetDetailComponent } from './timesheet-detail.component';
import { TimesheetService } from 'src/app/service/timesheet.service';
import { TimesheetDetailRoutingModule } from './timesheet-detail-routing.module';
import {DpDatePickerModule} from 'ng2-date-picker';



@NgModule({
  declarations: [TimesheetDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    TimesheetDetailRoutingModule,
    DpDatePickerModule
  ],
  providers: [
    TimesheetService
  ]
})
export class TimesheetDetailModule { }
