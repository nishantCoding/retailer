const express = require('express');


const customerRoute = express.Router();

customerRoute.get('/',(req,resp)=>{

    resp.json([{id:1, name:'ABC'},{id:2, name : 'PQR'}]);
})

module.exports = customerRoute;