import * as React from 'react';
import {Component} from 'one-framework';
import {TodoModel} from '../models';

interface ITodoProps {
	todo: TodoModel;
}

interface ITodoState { }

export class Todo extends Component<ITodoProps, ITodoState>{
	private lastSet: number;

	constructor(props: ITodoProps) {
		super(props);

		this.lastSet = props.todo.lastSet;

		this.fromPool<React.MouseEvent>('onDone')
			.subscribe(e => {
				e.stopPropagation();
				this.props.todo.set({ done: true });
			});

		this.fromPool<React.MouseEvent>('onDestroy')
			.subscribe(e => {
				e.stopPropagation();
				this.props.todo.destroy();
			});
	}

	shouldComponentUpdate(nextProps: ITodoProps): boolean {
		let shouldUpdate: boolean = false;

		if (this.lastSet !== nextProps.todo.lastSet) {
			this.lastSet = nextProps.todo.lastSet;
			shouldUpdate = true;
		}

		return shouldUpdate;
	}

	render(): JSX.Element {
		return (
			<li className={this.props.todo.get('done') ? 'done' : ''} onClick={e => this.toPool('onDone', e) }>
				{ this.props.todo.get('text') }

				<button onClick={e => this.toPool('onDestroy', e) }>Remove</button>
			</li>
		);
	}
}
