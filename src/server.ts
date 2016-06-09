import * as express from 'express';
import * as cors from 'cors';
import * as _ from 'lodash';
import {one, Sync} from './app';
import {join} from 'path';
import {Http} from './bin/Http';
import {Request} from 'one-request-transport';

let http: Http = new Http();
let app = express();
let server = http.createServer(app);

// set request transport as default
Sync.registerTransport('request', new Request());
Sync.defaultTransports = ['request'];

// serve static
app.use('/__clientBuild__', express.static(join(__dirname, '../__clientBuild__')));

// enable cross origin requests
app.use(cors());

// serve todos api
app.get('/api/v1/todos', (req, res) => {
	res.json(_.times(10, n => ({
		text: `task-${n}`
	})));
});

// responds html
app.get('*', (req, res) => {
	one.serverBootstrap(req.url)
		.subscribe(app => {
			res.send(`
			<!DOCTYPE html>
				<html lang="en">
					<head>
						<meta charset="UTF-8">
						<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
						<title>Simple todo list with One Framework</title>
						<link rel="stylesheet" href="./__clientBuild__/vendor.css">
						<style>
							.container{
								margin-top: 25px;
							}
							.item{
								cursor: pointer!important;
							}
							.item .text{
								padding-top: 10px!important;
								font-size: 17px;
								font-weight: lighter;
							}
							.done{
								text-decoration: line-through!important;
								color: #ddd!important;
							}
						</style>
					</head>
					<body class="ui container">
						<div data-outlet>${app}</div>
						<script type="text/javascript" src="./__clientBuild__/common.js"></script>
						<script type="text/javascript" src="./__clientBuild__/vendor.js"></script>
						<script type="text/javascript" src="./__clientBuild__/bundle.js"></script>
					</body>
				</html>
			`);
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
