import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TimesheetService } from '../../service/timesheet.service';
import { TimeSheet } from 'src/app/model/timesheet';


@Component({
  selector: 'app-timesheet-detail',
  templateUrl: './timesheet-detail.component.html',
  styleUrls: ['./timesheet-detail.component.scss']
})
export class TimesheetDetailComponent implements OnInit {

  public timesheetId: string;
  public timesheetDetail = <TimeSheet>{};
  public mode: string;    
  constructor( private activatedRoute: ActivatedRoute, private router: Router, private timesheetService: TimesheetService ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
          this.timesheetId = params['id'];
          if (this.timesheetId !== undefined) {
                console.log(this.timesheetId);
                this.gettimesheetDetailById(this.timesheetId);
                this.mode = 'Edit';    
          } else {
                // this.timesheetId = null;
                console.log(this.timesheetId);
                this.timesheetDetail['id'] = 0;
                this.mode = 'Add';   
          }
        }); 
  }
  
  gettimesheetDetailById(id) {
    this.timesheetDetail = this.timesheetService.getTimesheetById(parseInt(id));
    console.log(this.timesheetDetail);  
  }
  
  onTimesheetSubmitForm(form) {
    console.log(form);
    if(form.valid) {
        this.timesheetService.updateTimesheetById(this.timesheetDetail);
        this.router.navigate(['/timesheet-list']);
    } else {
    
    }
  }
  onClickCancel() {
    this.router.navigate(['/timesheet-list']);
  }

  public onTimeIn(value:any){
    if(null != this.timesheetDetail.timeOut){
      debugger;
      let diff: number = (<any>this.timesheetDetail.timeOut - <any>this.timesheetDetail.timeIn);
      this.timesheetDetail.totalHours =Math.round(diff);
      console.log( this.timesheetDetail.totalHours);
    }
  }
  public onTimeOut(value:any){
    if(null != this.timesheetDetail.timeIn){
      debugger;
      var diff = (new Date(this.timesheetDetail.timeOut).getTime() - new Date(this.timesheetDetail.timeIn).valueOf());
      this.timesheetDetail.totalHours =Math.round(diff);
      console.log( this.timesheetDetail.totalHours);
    }
  }
}