const express = require('express');
const { Noco } = require("nocodb");
const http = require('http');              // Required for creating HTTP server
const { Server } = require("socket.io");   // Socket.IO
(async () => {
    try {
        const app = express(); // Initialize express app
        const port = process.env.PORT || 8080; // Define the port to use

        // Manually manage PostgreSQL connection
        const { Pool } = require('pg');
        const pool = new Pool({
            connectionString: process.env.DATABASE_URL, // Ensure this includes sslmode=require
            ssl: {
                rejectUnauthorized: false
            }
        });

        // Check if NocoDB can use this pool directly or indirectly
        const noco = await Noco.init({
            config: {
                dbs: [{
                    type: 'pg',
                    name: 'vercelPg',
                    client: pool // If NocoDB can accept a client or a similar approach
                }]
            }
        }, null, app);

        app.use(noco);

        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
       // Handle Socket.IO connections
       io.on('connection', (socket) => {
            console.log('A user connected');
            socket.on('disconnect', () => {
                console.log('User disconnected');
            });
        });

        // Optionally add more routes or middleware if needed
        app.get('/api', (req, res) => res.send('API Endpoint works!'));


        // Listen on the port

 
    } catch (e) {
        console.error('Failed to start the server:', e);
    }
})();
