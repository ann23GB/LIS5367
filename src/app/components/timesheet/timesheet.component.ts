import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimeSheet } from 'src/app/model/timesheet';
import { TimesheetService } from 'src/app/service/timesheet.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  public timesheets: TimeSheet[] = [];
  constructor( private router: Router, private timesheetService: TimesheetService ) { }
  
  ngOnInit() {
      this.loadAllTimesheetList();    
  }
  loadAllTimesheetList() {
      this.timesheets = this.timesheetService.getAllTimesheet();
  }

  onClickEditTimesheetDetail(id) {
    this.router.navigate(['/timesheet-detail'], {queryParams: {id: id}});
  }

  onClickAddTimesheet() {
      this.router.navigate(['/timesheet-detail']);
  }

  onClickTimesheetDelete(id) {
      this.timesheetService.deleteTimesheetDetail(id);
      this.loadAllTimesheetList(); 
  }

}
