import * as React from 'react';
import {Component} from 'one-framework';
import {Link} from 'react-router';

interface IMainProps{
	children: Array<Element>
}

interface IMainState {}


export class Main extends Component<IMainProps, IMainState>{
	constructor(){
		super();
	}

	render(): JSX.Element{
		return (
			<section>
				<Link to="/">All</Link>
				<Link to="/done">Done</Link>

				{this.props.children}
			</section>
		);
	}
}
