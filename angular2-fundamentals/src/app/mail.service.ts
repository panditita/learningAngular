import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MailService {
	messages = [
		{ id: 0, text: 'You are friends now with Ixchel' },
		{ id: 1, text: 'Yesenia likes your tweet' },
		{ id: 2, text: 'You never believe what Ixchel said...' }
	];

	update(id, text) {
		this.messages = this.messages.map((message) => (message.id === id ? { id, text } : message));
	}
	constructor() {}
}
