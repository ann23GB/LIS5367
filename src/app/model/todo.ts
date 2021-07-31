export class Todo {
    constructor(
        public done: boolean,
        public id: number,
        public task: string,
        public description: string,
        public notes: string,
        public priority: string
    ) { }
}