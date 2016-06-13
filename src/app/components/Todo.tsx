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
				this.props.todo.done();
			});

		this.fromPool<React.MouseEvent>('onDestroy')
			.subscribe(e => {
				e.stopPropagation();
				this.props.todo.remove();
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
			<div className={'item ' + (this.props.todo.get('done') ? 'done' : '')} onClick={e => this.toPool('onDone', e) }>
				<div className="right floated content">
					<button className="ui icon red circular button" onClick={e => this.toPool('onDestroy', e) }>
						<i className="trash icon"></i>
					</button>
				</div>
				
				<div className="content text">
					<i className={'icon ' + (this.props.todo.get('done') ? 'checkmark box' : 'square outline')}></i>
					{ this.props.todo.get('text') }
				</div>
			</div>
		);
	}
}
