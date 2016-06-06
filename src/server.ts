import * as express from 'express';
import {one} from './app';
import {join} from 'path';
import {Http} from './bin/Http';

let http: Http = new Http();
let app = express();
let server = http.createServer(app);

app.use('/build', express.static(join(__dirname, '../build')));

app.get('*', (req, res) => {
	one.serverBootstrap(req.url)
		.subscribe(app => {
			res.send(`
			<!DOCTYPE html>
				<html lang="en">
					<head>
						<meta charset="UTF-8">
						<title>Simple todo list with One Framework</title>
						<style>
							li{
								cursor: pointer;
							}

							a{
								margin-right: 10px;
							}

							.done{
								text-decoration: line-through;
								color: #ddd;
							}
						</style>	
					</head>
					<body>
						<a href="https://github.com/feliperohdee/one-framework-sample">Source</a>
						<div data-outlet>
						${app}
						</div>
						<script type="text/javascript" src="build/common.js"></script>
						<script type="text/javascript" src="build/vendor.js"></script>
						<script type="text/javascript" src="build/bundle.js"></script>
					</body>
				</html>
			`);
	});
});

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
