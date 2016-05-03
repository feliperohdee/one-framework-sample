import {Collection} from 'one-framework';
import {TodoModel} from '../models'

/**
 * Collection definition
 */
export class Todos extends Collection<TodoModel> {
	constructor() {
		super(TodoModel, _.times(10, n => ({
			text: `task-${n}`
		})));

		this.defaultOrder = {
			done: 'desc',
			text: 'asc'
		}
	}
}
