const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgresql://default:FZdsdsdsds@ep-blue-violet-adsi.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
    ssl: {
        rejectUnauthorized: false
    }
});

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    pool.end();
});
