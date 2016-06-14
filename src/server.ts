import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as _ from 'lodash';
import {one, Sync} from './app';
import {join} from 'path';
import {Http} from './bin/Http';
import {Request} from 'one-request-transport';
import {DataStore} from './DataStore';

let http: Http = new Http();
let app = express();
let server = http.createServer(app);
let dataStore: DataStore = new DataStore();

// set request transport as default
Sync.registerTransport('request', new Request());
Sync.defaultTransports = ['request'];

// server setup
app.use('/__clientBuild__', express.static(join(__dirname, '../__clientBuild__')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// view engine setup
app.set('views', join(__dirname, '../views'));
app.set('view engine', 'hbs');

// serve todos api
app.get('/api/v1/todos', (req, res) => {
	res.json(dataStore.fetch());
});

app.post('/api/v1/todos', (req, res) => {
	res.json(dataStore.add(req.body));
});

app.put('/api/v1/todos/:id', (req, res) => {
	res.json(dataStore.put(req.params.id, req.body));
});

app.delete('/api/v1/todos/:id', (req, res) => {
	res.json(dataStore.delete(req.params.id));
});

// responds html
app.get(<any>['/', '/done'], (req, res) => {
	one.serverBootstrap(req.url)
		.subscribe(({component, contextScript}) => {
			res.render('index', { component, contextScript })
		});
});

// error handling
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
	let err: any = new Error('Not Found');
	err.status = 404;

	next(err);
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(err.status || 500);
    res.end(JSON.stringify({
		message: err.message,
		error: err
    }));
});
