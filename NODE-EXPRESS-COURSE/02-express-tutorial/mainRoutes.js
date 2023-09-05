// mainRoutes.js

const favicon = require('serve-favicon');
const path = require('path');
const express = require('express');
const router = express.Router();

router.use(favicon(path.join(__dirname, 'favicon.ico')));

router.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Home Pages</title>
                <link rel="icon" href="/favicon.ico" type="image/x-icon">
            </head>
            <body>
                Home Page
            </body>
        </html>
    `);
});

module.exports = router;
