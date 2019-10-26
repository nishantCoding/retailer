const express = require('express');

const userRoute = require('./userRoute');
const customerRoute = require('./customerRoute');
const transactionRoute = require('./transactionRoute');
const router = express.Router();

router.use('/users', userRoute);
router.use('/customers', customerRoute);
router.use('/transactions', transactionRoute);

router.get('/test', (req, resp) => {
    resp.json('test');
});

module.exports = router;