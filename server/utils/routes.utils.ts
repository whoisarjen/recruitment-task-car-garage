import { Express } from 'express'
import { getAll } from './query.utils';

const routes = (app: Express) => {

    app.get('/', async (req, res) => {
        res.send(await getAll());
    });

}

export default routes;