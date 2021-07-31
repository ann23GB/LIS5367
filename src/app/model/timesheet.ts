import { DatePickerComponent } from "ng2-date-picker";

export class TimeSheet {
    constructor(
        public id: number,
        public name: string,
        public date: Date,
        public timeIn: Date,
        public timeOut: Date,
        public totalHours: number
    ) { }
}