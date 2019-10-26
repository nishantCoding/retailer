const express = require('express');
var cors = require('cors');




const userRoute = express.Router();

userRoute.get('/',(req,resp)=>{

    resp.json([{id:1, role:'owner'},{id:2, role : 'admin'}]);
})

module.exports = userRoute;