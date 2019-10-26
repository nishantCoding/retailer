const express = require('express');


const transactionRoute = express.Router();

transactionRoute.get('/', (req, resp) => {
    resp.json([{
            id: 1,
            name: 'ABC',
            amountPaid: 200,
            timeOfTransaction: new Date().toLocaleString()
        },
        {
            id: 2,
            name: 'PQR',
            amountPaid: 200,
            timeOfTransaction: new Date().toLocaleString()
        }
    ]);
})

module.exports = transactionRoute;