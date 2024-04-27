// Import the pool from db.js
const pool = require('../db/db');

async function fetchData() {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM my_table');
        return result.rows;
    } catch (err) {
        console.error('Error executing query', err.stack);
        throw err;
    } finally {
        client.release();
    }
}

module.exports = {
    fetchData
};
