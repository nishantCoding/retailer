const express = require('express');
const { get_all_users } = require('../controllers/userController');




const userRoute = express.Router();

userRoute.get('/', get_all_users)

module.exports = userRoute;