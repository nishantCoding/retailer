const express = require('express');
const userController = require('../controllers/userController');

const { get_all_users,
    get_user_by_id,
    create_user } = userController;

const userRoute = express.Router();

userRoute.get('/', get_all_users);
userRoute.get('/:id', get_user_by_id);
userRoute.post('/', create_user);

module.exports = userRoute;