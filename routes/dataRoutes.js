const express = require('express');
const router = express.Router();
const dataService = require('./services/dataService');

// Endpoint to get data
router.get('/data', async (req, res) => {
    try {
        const data = await dataService.fetchData();
        res.json(data);
    } catch (err) {
        console.error('Failed to fetch data', err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
