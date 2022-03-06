import sqlite3 from 'sqlite3'

const sqllite3 = sqlite3.verbose();

export const db = new sqllite3.Database('./db/warehouses.db', sqllite3.OPEN_READWRITE, (err) => {
    if (err) return console.log('SQLite has error', err)

    console.log('SQLite connected')
});