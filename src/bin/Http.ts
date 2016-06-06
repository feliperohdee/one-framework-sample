import * as express from 'express';
import {
	createServer, 
	IncomingMessage, 
	ServerResponse,
	Server
} from 'http';


export class Http {
	private port: number = process.env.PORT || 3000;
	public server: Server;

	createServer(app: express.Application): Server {
		if (this.server){
			return this.server;
		}

		this.server = createServer(app as any);
		this.server.listen(this.port);
		this.server.on('listening', () => {
			let addr = this.server.address();

			console.log(`Listening on ${addr.port}`);
		})

		return this.server;
	}
}
