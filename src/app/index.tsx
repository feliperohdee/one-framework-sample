import {Observable} from 'rxjs';
import {one} from 'one-framework';
import {
	MainComponent,
	TodosComponent
} from './components';
import {
	TodosCollection
} from './collections';

let todos = new TodosCollection();

one.routes = {
	path: '/',
	component: MainComponent,
	prefetch: params => {
		return todos.stream
			.map(todos => ({ todos }))
			.first();
	},
	indexRoute: {
		component: TodosComponent,
		prefetch: params => {
			return Observable.of<TodosCollection>(params.prefetchedData.todos)
				.map(todos => todos.get())
				.map(todos => ({ todos }));
		}
	},
	childRoutes: [{
		path: '/:status',
		component: TodosComponent,
		prefetch: params => {
			return Observable.of<TodosCollection>(params.prefetchedData.todos)
				.map(todos => todos.filter(params.status))
				.map(todos => ({ todos }));
		}
	}]
};

export { one };
