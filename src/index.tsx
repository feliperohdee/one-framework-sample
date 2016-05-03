import {one} from 'one-framework';
import {
	MainComponent,
	TodosComponent
} from './components'

one.url = 'http://localhost:9091/'
one.routes = {
	path: '/',
	component: MainComponent,
	indexRoute: {
		component: TodosComponent
	},
	childRoutes: [{
		path: '/:status',
		component: TodosComponent
	}]
};

one.bootstrap();
