const express = require('express');

const userRoute = require('./userRoute');
const customerRoute = require('./customerRoute');
const router = express.Router();

router.use('/users', userRoute);
router.use('/customers', customerRoute);

router.get('/test',(req,resp)=>{
    resp.json('test');
});

module.exports = router;


