import { Express } from 'express'
import { addCheckout, getAll } from './query.utils';

const routes = (app: Express) => {
    app.get('/', async (req, res) => {
        res.send(await getAll());
    });

    app.post('/checkout/add', async (req, res) => {
        res.send(await addCheckout(req.body));
    });

}

export default routes;