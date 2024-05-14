const { Pool } = require('pg')

const database = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '12345',
    database: 'plan_de_viajes',
    allowExitOnIdle: true
})


module.exports = database;