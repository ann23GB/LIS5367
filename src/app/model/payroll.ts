export class Payroll {
    constructor(
        public name: string,
        public frequency: number,
        public hourlyRate: number,
        public totalHours: number,
        public paymentStatus: string

    ) { }
}