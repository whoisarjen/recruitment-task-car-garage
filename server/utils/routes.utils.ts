import { Express } from 'express'
import { addCheckout, deleteCheckoutByID, getAllCars, getAllCheckout } from './query.utils';

const routes = (app: Express) => {
    app.get('/', async (req, res) => {
        res.send(await getAllCars());
    });
    app.get('/checkout', async (req, res) => {
        res.send(await getAllCheckout());
    });

    app.post('/checkout/add', async (req, res) => {
        res.send(await addCheckout(req.body));
    });

    app.delete('/checkout/:id', async (req, res) => {
        res.send(await deleteCheckoutByID(req.params.id));
    });
}

export default routes;