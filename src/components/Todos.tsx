import * as React from 'react';
import {Component} from 'one-framework';
import {TodoModel} from '../models';
import {TodosCollection} from '../collections';
import {
	TodoComponent as Todo,
	InputComponent as Input
} from './';

interface ITodosProps {
	params: any
}

interface ITodosState {
	todos: Array<TodoModel>
}

export class Todos extends Component<ITodosProps, ITodosState>{
	public todos: TodosCollection = new TodosCollection();

	constructor() {
		super();

		this.setInitialState({
			todos: []
		});
	}

	componentDidMount(): void {
		this.todos.stream
			.merge(this.onRoute.mapTo(this.todos))
			.takeUntil(this.onUnmount)
			.map(todos => todos.filter(this.props.params.status))
			.subscribe(todos => this.setState({ todos }));
	}

	render(): JSX.Element {
		let todos = this.state.todos.map(todo => <Todo key={todo.cid} todo={todo}/>);

		return (
			<section className="tasks">
				<ul>
					{_.size(todos) ? todos : <li>No todos</li>}
				</ul>

				<Input todos={this.todos}/>
			</section>
		);
	}
}
