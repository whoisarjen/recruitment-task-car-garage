import { db } from './connection.utils'

export const getAll = async () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM warehouses ORDER BY list_cars_vehicles_date_added ASC`, [], (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows)
        })
    });
}