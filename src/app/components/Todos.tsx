import * as _ from 'lodash';
import * as React from 'react';
import {Component} from 'one-framework';
import {TodoModel} from '../models';
import {TodosCollection} from '../collections';
import {
	TodoComponent as Todo,
	InputComponent as Input
} from './';

interface ITodosProps {
	params?: any
}

interface ITodosState {
	todos: Array<TodoModel>
}

export class Todos extends Component<ITodosProps, ITodosState>{
	public todos: TodosCollection = TodosCollection.instance;

	constructor(props?: ITodosProps) {
		super(props);
	
		this.setInitialState({
			todos: this.todos.filter(props.params.status)
		});
	}

	componentDidMount(): void {
		($('.ui.search') as any).search({
			source: this.todos.map(todo => {
				return {
					title: todo.get('text')
				}
			}),
			onSelect: filterString => this.todos.trigger('filter', filterString.title)
		});

		this.todos.on('filter')
			.takeUntil(this.onUnmount)
			.map(filterString => this.todos.filter(todo => todo.equals('text', filterString)))
			.subscribe(todos => this.setState({ todos }));

		this.todos.on('set', 'destroy')
			.merge(
				this.onRoute.mapTo(this.todos)
			)
			.takeUntil(this.onUnmount)
			.map(() => this.todos.filter(this.props.params.status))
			.subscribe(todos => this.setState({ todos }));
	}

	render(): JSX.Element {
		let todos = this.state.todos.map(todo => <Todo key={todo.cid} todo={todo}/>);

		return (
			<section className="ui divided list">
				{_.size(todos) ? todos : <div className="item">No todos</div>}

				<Input todos={this.todos}/>
			</section>
		);
	}
}
