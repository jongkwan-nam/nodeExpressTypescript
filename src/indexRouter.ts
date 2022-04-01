import express from 'express';

export default express
    .Router()
    .get('/', (req: express.Request, res: express.Response) => {
        res.json({
            reqUrl: req.url,
            reqParam: req.params,
        });
    })
    .get('/welcome', (req, res) => {
        res.send('welcome!');
    })
    .get('/posts', (req, res) => {
        res.json([
            { id: 1, content: 'hello' },
            { id: 2, content: 'hello2' },
            { id: 3, content: 'hello3' },
        ]);
    });
