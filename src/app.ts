import express from 'express';
import { join } from 'path';
import createError from 'http-errors';
import favicon from 'serve-favicon';

import indexRouter from './indexRouter';
import e from 'express';

const port = process.env.PORT || 4000;

express()
	.use(favicon(join(__dirname, '../public', 'favicon.ico')))
	.use(express.static(join(__dirname, '../public')))
	.use('/api', indexRouter)
	.use((req, res, next) => {
		res.redirect('/404.html');
	})
	.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
		console.log('err', typeof err, err.status, err.message, res.headersSent, err.stack);
		if (res.headersSent) {
			return next(err);
		}
		if (req.xhr) {
			res.status(err.status || 500);
			res.json(err);
		} else {
			res.redirect('/500.html');
		}
	})
	.listen(port, () => {
		console.log(`
        ################################################
            🛡️  Server listening on port: ${port} 🛡️
        ################################################`);
	});
