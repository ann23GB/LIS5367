import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PayrollRoutingModule } from './payroll-routing.module';
import { PayrollComponent } from './payroll.component';
import { PayrollService } from 'src/app/service/payroll.service';
import { TimesheetService } from 'src/app/service/timesheet.service';


@NgModule({
  declarations: [PayrollComponent],
  imports: [
    CommonModule,    
    FormsModule,
    PayrollRoutingModule
  ],
  providers: [
    PayrollService,
    TimesheetService
  ],
  exports: [
    PayrollComponent
  ]
})
export class PayrollModule { }
