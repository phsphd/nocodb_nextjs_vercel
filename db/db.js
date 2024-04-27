// db.js - Database connection setup
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

module.exports = pool;

// dataService.js - A module for database operations
const pool = require('./db');

async function getCurrentTime() {
    const query = 'SELECT NOW()';
    try {
        const result = await pool.query(query);
        return result.rows[0].now;  // returns the current time
    } catch (error) {
        console.error('Failed to fetch current time:', error);
        throw error;
    }
}

module.exports = {
    getCurrentTime
};

// In your application logic
const dataService = require('./dataService');

async function handleRequest(req, res) {
    try {
        const currentTime = await dataService.getCurrentTime();
        res.json({ currentTime });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}
