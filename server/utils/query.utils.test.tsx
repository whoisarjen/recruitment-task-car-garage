import supertest from 'supertest'
import { app } from '../server'
import routes from './routes.utils';

routes(app);

describe('Testing path "/"', () => {
    it('Expecting array with specific property', async () => {
        const { body } = await supertest(app)
            .get('/')
            .expect(200)

        expect(body[0]).toHaveProperty('list_cars_vehicles_id')
        expect(body[0]).toHaveProperty('list_cars_vehicles_date_added')
    })
})

describe('Testing path "/checkout"', () => {
    it('Expecting array with specific property', async () => {
        const { body } = await supertest(app)
            .get('/checkout')
            .expect(200)

        expect(body[0]).toHaveProperty('id')
        expect(body[0]).toHaveProperty('car_list_cars_vehicles_id')
    })
})

let toDeleteInCheckoutID = 0;

describe('Testing path "/checkout/add"', () => {
    it('Expecting object with id', async () => {
        const { body } = await supertest(app)
            .post('/checkout/add')
            .send({ car_list_cars_vehicles_id: 52 })
            .expect(200)

        
        expect(body).toEqual({
            id: expect.any(Number)
        })

        toDeleteInCheckoutID = body.id
    })
})

describe('Testing delete path "/checkout/:id"', () => {
    it('Expecting to delete specific id', async () => {
        await supertest(app)
            .delete('/checkout/' + toDeleteInCheckoutID)
            .expect(200)

        const { body } = await supertest(app)
            .get('/checkout')
            .expect(200)

        expect(body.filter(x => x.id == toDeleteInCheckoutID)).toEqual([])
    })
})