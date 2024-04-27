const { Pool } = require('pg');

// URL encode the password. Assume the password is `Fdsd` as an example
const password = encodeURIComponent('FZ0sdddsds');
const connectionString = `pg://default:${password}@ep-blue-violet-ds.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require`;

const pool = new Pool({
    connectionString: connectionString
});

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    pool.end();
});
