import { DatePickerComponent } from "ng2-date-picker";

export class TimeSheet {
    constructor(
        public id: number,
        public name: string,
        public date: Date,
        public timeIn: string,
        public timeOut: string,
        public totalHours: number
    ) { }
}