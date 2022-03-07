import { CarProps } from '../interfaces/car.interface';
import { db } from './connection.utils'

export const getAllCars = async () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM warehouses WHERE list_cars_vehicles_id IS NOT NULL ORDER BY list_cars_vehicles_date_added ASC`, [], (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows)
        })
    });
}

export const getAllCheckout = async () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM checkout JOIN warehouses ON checkout.car_list_cars_vehicles_id = warehouses.list_cars_vehicles_id`, [], (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows)
        })
    });
}

export const addCheckout = async (car: CarProps) => {
    await new Promise((resolve, reject) => {
        db.all(`INSERT INTO checkout (car_list_cars_vehicles_id) VALUES (?)`, [car.list_cars_vehicles_id], (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows)
        })
    });

    const res = await new Promise((resolve, reject) => {
        db.all(`SELECT last_insert_rowid()`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res)
        })
    })
    
    return {
        id: res[0]['last_insert_rowid()']
    }
}

export const deleteCheckoutByID = async (id: number) => {
    return new Promise((resolve, reject) => {
        db.all(`DELETE FROM checkout WHERE id = ?`, [id], (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(true)
        })
    });
}