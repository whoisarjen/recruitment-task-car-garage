import express from 'express';
import { getAll } from './utils/query.utils';
const app = express();
const port = 1337;

app.get('/', async (req, res) => {
    res.send(await getAll());
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
