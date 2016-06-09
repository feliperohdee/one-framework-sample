import {Observable} from 'rxjs';
import {one, Sync} from 'one-framework';
import {
	MainComponent,
	TodosComponent
} from './components';
import {
	TodosCollection
} from './collections';

let todos = TodosCollection.instance;

one.url = process.env.NODE_ENV === 'production' ? 'https://one-framework-sample.herokuapp.com' : 'http://localhost:3000';

one.routes = {
	path: '/',
	component: MainComponent,
	prefetch: () => {
		return todos.fetch();
	},
	indexRoute: {
		component: TodosComponent,
		prefetch: () => {
			return todos.stream
				.first()
				.map(() => ({ todos: todos.get() }));
		}
	},
	childRoutes: [{
		path: '/:status',
		component: TodosComponent,
		prefetch: params => {
			return todos.stream
				.first()
				.map(() => ({ todos: todos.filter(params.status) }));
		}
	}]
};

export { 
	one,
	Sync
};
