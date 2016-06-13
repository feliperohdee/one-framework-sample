import * as _ from 'lodash';
import {utils, Collection} from 'one-framework';
import {TodoModel} from '../models'

/**
 * Collection definition
 */
export class Todos extends Collection<TodoModel> {
	static get instance(): Todos {
		return utils.exportSingleton(Todos);
	}

	constructor() {
		super(TodoModel);

		this.resource = '/api/v1/todos';
		this.defaultOrder = {
			done: 'desc',
			text: 'asc'
		}
	}

	add(text: string): void {
		this.set({ text });
	}
}
