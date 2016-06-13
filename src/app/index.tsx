import {Observable} from 'rxjs';
import {one, Sync} from 'one-framework';
import {
	MainComponent,
	TodosComponent
} from './components';
import {
	TodosCollection
} from './collections';

// share this collection with client side with "collectionCode" to identify
TodosCollection.instance.shareContext('collectionCode');

one.url = process.env.NODE_ENV === 'production' ? 'https://one-framework-sample.herokuapp.com' : 'http://localhost:3000';

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

export { 
	one,
	Sync
};
