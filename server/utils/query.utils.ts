import { db } from './connection.utils'

export const getAll = async () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM warehouses WHERE list_cars_vehicles_id IS NOT NULL ORDER BY list_cars_vehicles_date_added ASC`, [], (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows)
        })
    });
}