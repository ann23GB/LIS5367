import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Payroll } from 'src/app/model/payroll';
import { PayrollService } from 'src/app/service/payroll.service';

import { TimesheetService } from '../../service/timesheet.service';
import { TimeSheet } from 'src/app/model/timesheet';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent implements OnInit {
  public payroll = <Payroll>{};
  public timesheetId: string;
  public timesheetDetail = <TimeSheet>{};
  public hourlyRate = 10;

  constructor( private activatedRoute: ActivatedRoute, private router: Router, private payrollService: PayrollService ) { }
  
  public mode: string; 

  ngOnInit() {
    console.log(this.timesheetDetail);
  }
  // ngOnInit() {
  //     this.loadAllPayrollList();    
  // }
  // loadAllPayrollList() {
  //     //this.payrolls = this.payrollService.getAllPayroll();
  // }

  // onClickEditPayrollDetail(id) {
  //   this.router.navigate(['/payroll-detail'], {queryParams: {id: id}});
  // }

  // onClickAddPayroll() {
  //     this.router.navigate(['/payroll-detail']);
  // }

  // onClickPayrollDelete(id) {
  //     //this.payrollService.deletePayrollDetail(id);
  //     this.loadAllPayrollList(); 
  // }

  onPayrollSubmitForm(form) {
    console.log(form);
    if(form.valid) {
        
        this.router.navigate(['/home']);
    } else {
    
    }
  }

  onGeneratePayroll()
  {}

}
