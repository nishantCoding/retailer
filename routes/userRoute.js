const express = require('express');
const userController = require('../controllers/userController');
const { verify_token, sign_in} = require('../controllers/authentication')

const { get_all_users,
    get_user_by_id,
    create_user } = userController;

const userRoute = express.Router();

userRoute.get('/restaurants/:restaurantId', get_all_users);
userRoute.get('/:id', [verify_token,get_user_by_id]);
userRoute.post('/', create_user);
userRoute.post('/login', sign_in);

module.exports = userRoute;