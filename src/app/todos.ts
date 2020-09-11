export class Todo {
	constructor(
		public id: number,
		public title: string,
		public _id: string,
		public time: string = "",
		public completed: boolean = false,
		public link: string = "") {}
}