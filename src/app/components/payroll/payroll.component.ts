import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Payroll } from 'src/app/model/payroll';
import { PayrollService } from 'src/app/service/payroll.service';

import { TimesheetService } from '../../service/timesheet.service';
import { TimeSheet } from 'src/app/model/timesheet';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent implements OnInit {
  public payroll = <Payroll>{};
  public hourlyRate = 10;

  constructor( private activatedRoute: ActivatedRoute, private router: Router, 
    private payrollService: PayrollService, private timesheetService: TimesheetService ) { }
  
  public mode: string; 
  public timesheets: TimeSheet[] = [];
  public names: Set<string> = new Set();
  public selectedName: string;
  public noOfDays: number;
  public totalHours: number;


  ngOnInit() {
      this.loadAllTimesheetList();    
  }
  loadAllTimesheetList() {
      this.timesheets = this.timesheetService.getAllTimesheet();
      this.names = new Set(this.timesheets.map(item => item.name));
  }

  onNannySelected(e){
    let filterdTimesheets: TimeSheet[] = this.timesheets.filter(item => item.name === this.selectedName)
    this.noOfDays = filterdTimesheets.length
    this.totalHours = filterdTimesheets.reduce( function(a, b){
      return Number(a) + Number(b['totalHours']);
    }, 0)
  }


  generatePayroll() {
    const replacer = (key, value) => value === null ? '' : value; 
    const csv = [
      "Name," + this.selectedName + "\r\n",
      "No of Days," + this.noOfDays + "\r\n",
      "Total Hours," + this.totalHours + "\r\n",
      "Amount," + (this.totalHours * this.hourlyRate) + "$" + "\r\n"
    ]

    var blob = new Blob(csv, {type: 'text/csv' })
    saveAs(blob, "payroll.csv");
  }

  onGeneratePayroll()
  {}

}
