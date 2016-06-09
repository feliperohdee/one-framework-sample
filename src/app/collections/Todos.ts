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

	public resource: string = '/api/v1/todos';

	constructor() {
		super(TodoModel);

		this.defaultOrder = {
			done: 'desc',
			text: 'asc'
		}
	}
}
