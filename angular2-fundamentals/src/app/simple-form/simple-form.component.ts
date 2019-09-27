import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-simple-form',
	template: `
	<input #myInput 
	type="text" 
	[(ngModel)]="message"
	[ngClass]="{ mouseDown : isMouseDown }"
	(mouseDown)="isMouseDown = true"
	(mouseUp)="isMouseDown = false"
	(mouseLeave)="isMouseDown = false"
	>
	<button 
	
	(click)="update.emit({text:message})"> Click me! </button>
  `,
	styles: [
		`:host {
			display: flex;
			flex-direction: column;
		},

		input:focus{
			font-weight: bold;
			outline: none;
		},
		
		button{
			border: none;
		},
		.mouseDown{
			border: 2px solid green;
		}`
	]
})
export class SimpleFormComponent implements OnInit {
	isMouseDown;

	@Input() message;
	@Output() update = new EventEmitter();

	constructor() {}

	ngOnInit() {}
}
