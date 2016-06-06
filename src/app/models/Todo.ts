import {Model} from 'one-framework';

/**
 * Model definition
 */
export class Todo extends Model {
	public idAttribute: string = 'text';
	public defaults: any = {
		text: '',
		done: false
	}

	constructor() {
		super();
	}
}
