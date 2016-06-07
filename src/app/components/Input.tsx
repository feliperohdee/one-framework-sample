import * as React from 'react';
import {Component} from 'one-framework';
import {TodosCollection} from '../collections';

interface IInputProps {
	todos: TodosCollection;
}

interface IInputState { }

export class Input extends Component<IInputProps, IInputState>{
	constructor(props) {
		super(props);

		this.fromPool<React.KeyboardEvent>('onAddTask')
			.subscribe(e => {
				if (e.keyCode === 13) {
					let target: HTMLInputElement = e.target as HTMLInputElement;
					let text: string = target.value;
					target.value = '';

					this.props.todos.set({ text });
				}
			});
	}

	render(): JSX.Element {
		return (
			<div className="ui form">
				<div className="field">
					<label>Add Todo</label>
					<input type="text" placeholder="Add todo and press enter" onKeyUp={ e => this.toPool('onAddTask', e) }/>
	  			</div>
			</div>
		);
	}
}
