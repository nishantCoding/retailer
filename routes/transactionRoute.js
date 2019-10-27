const express = require('express');
const { getAllTransactions } = require('../controllers/transactionRoute');

const transactionRoute = express.Router();

transactionRoute.get('/', getAllTransactions)

module.exports = transactionRoute;