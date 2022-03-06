import { db } from './connection.utils'

export const getAll = async () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM warehouses`, [], (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows)
        })
    });
}