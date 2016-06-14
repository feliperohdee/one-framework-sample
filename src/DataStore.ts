import * as _ from 'lodash';

interface ITodo {
	id: number;
	text: string;
	done?: boolean;
}

export class DataStore {
	public data: Array<ITodo>;
	public id: number = 0;

	constructor() {
		this.data = _.times(10, id => {
			this.id = id;

			return {
				id: this.id,
				text: `task-${this.id}`
			}
		});
	}

	fetch(): Array<ITodo> {
		return this.data;
	}

	get(id: number): ITodo {
		return _.find(this.data, { id });
	}

	getIndex(id: number): number {
		return _.findIndex(this.data, { id });
	}

	add(data: any): ITodo {
		data = _.extend({
			id: ++this.id
		}, data);

		this.data.push(data);

		return data;
	}

	put(id: number, data: any): ITodo {
		let todo: ITodo = this.get(Number(id));

		if (!todo){
			return;
		}

		return _.extend(todo, data) as ITodo;
	}

	delete(id: number): ITodo {
		let todo: ITodo = this.get(Number(id));
		let index: number = this.getIndex(Number(id));

		if (index < 0) {
			return;
		}

		_.pullAt(this.data, [index]);

		return todo;
	}
}
