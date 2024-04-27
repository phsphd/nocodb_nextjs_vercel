const express = require('express');
const { Noco } = require("nocodb");

const app = express();
const port = process.env.PORT || 8080;

(async () => {
    try {
        await Noco.init({
            config: {
                dbs: [{
                    type: 'sqlite',
                    name: 'local',
                    file: 'noco.db'
                }]
            }
        }, null, app);

        app.get('/', (req, res) => {
            res.send('Homepage');
        });

        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
    }
})();
