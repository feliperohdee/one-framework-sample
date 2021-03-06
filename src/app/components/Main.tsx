import * as _ from 'lodash';
import * as React from 'react';
import {Component, Sync} from 'one-framework';
import {Link} from 'react-router';
import {Observable} from 'rxjs';
import {TodosCollection} from '../collections';

interface IMainProps{
	children?: Array<Element>;
}

interface IMainState {}


export class Main extends Component<IMainProps, IMainState>{
	static preServer(): Observable<any> {
		return TodosCollection.instance.fetch({
			reset: true
		});
	}

	constructor(props: IMainProps) {
		super(props);
	}

	render(): JSX.Element{
		return (
			<section>
				<div className="ui search">
				  	<div className="ui fluid icon input">
				    	<input className="prompt" type="text" placeholder="Filter"/>
				    	<i className="search icon"></i>
					</div>
					<div className="results"></div>
				</div>

				<div className="ui pointing menu">
					<Link className="item" activeClassName="active" onlyActiveOnIndex={true} to="/">All</Link>
					<Link className="item" activeClassName="active" to="/done">Done</Link>

					<div className="right menu">
						<a className="item" href="https://github.com/feliperohdee/one-framework-sample">Source</a>
					</div>
				</div>

				{this.props.children}
			</section>
		);
	}
}
