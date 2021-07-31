import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TimeSheet } from '../model/timesheet';

@Injectable()
export class TimesheetService {

    public timesheets: TimeSheet[] = [];
    constructor() { }
  
    getAllTimesheet(): TimeSheet[] {

        if(localStorage.getItem('localTimesheetData') !== null){ 
            this.timesheets = JSON.parse(localStorage.getItem('localTimesheetData'));
        } else {
            var timesheetsArray = [];
            localStorage.setItem('localTimesheetData', JSON.stringify(timesheetsArray));
            this.timesheets = JSON.parse(localStorage.getItem('localTimesheetData'));
        }       
        return this.timesheets;
    }
    
    getTimesheetById(id: number): TimeSheet {
        var timesheetsArray = JSON.parse(localStorage.getItem('localTimesheetData'));       
        return timesheetsArray
          .filter(timesheet => timesheet.id === id)
          .pop();
    }
  
    updateTimesheetById(timesheet): TimeSheet {
        if (timesheet.id === 0) {                    
            var timesheetsArray = JSON.parse(localStorage.getItem('localTimesheetData'));
            var timesheetId = timesheetsArray.length;
                timesheet.id = ++timesheetId;
                timesheetsArray.push(timesheet);
            localStorage.setItem('localTimesheetData', JSON.stringify(timesheetsArray));
        } else {
            var timesheetsSaveArray = JSON.parse(localStorage.getItem('localTimesheetData'));
            for (var i in timesheetsSaveArray) {
                if (timesheetsSaveArray[i].id === timesheet.id) {
                    timesheetsSaveArray[i] = timesheet;
                    localStorage.setItem('localTimesheetData', JSON.stringify(timesheetsSaveArray));
                }
            }
        }
        return timesheet;
    }
    
    deleteTimesheetDetail(id) {
       var timesheetsArray = JSON.parse(localStorage.getItem('localTimesheetData'));
        for (var i in timesheetsArray) {
            if (timesheetsArray[i].id === id) {
                timesheetsArray.splice(i, 1);
                localStorage.setItem('localTimesheetData', JSON.stringify(timesheetsArray));  
            }
        }    
    };    
}