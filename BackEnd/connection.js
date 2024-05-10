import mySql from 'mysql2'

export const db = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '129109208',
    database: 'travel_package'
})
