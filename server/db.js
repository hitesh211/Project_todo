const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    password:'postgre12345',
    host:'65.0.203.114',
    port: 5432,
    database:'todo'
})

module.exports = pool;
