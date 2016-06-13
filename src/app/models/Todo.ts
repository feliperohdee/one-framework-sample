import {Model} from 'one-framework';

/**
 * Model definition
 */
export class Todo extends Model {
	public defaults: any = {
		text: '',
		done: false
	}

	constructor() {
		super();
	}

	done(): void {
		this.set({ done: true })
			.save()
			.subscribe();
	}

	remove(): void {
		this.delete()
			.subscribe();
	}
}
