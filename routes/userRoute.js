const express = require('express');
<<<<<<< HEAD
const { get_all_users } = require('../controllers/userController');


=======
const userController = require('../controllers/userController');
>>>>>>> 87cf3a89174925d45ef0dfe3c1e2a5bd21eeea14

const { get_all_users,
    get_user_by_id,
    create_user } = userController;

const userRoute = express.Router();

<<<<<<< HEAD
userRoute.get('/', get_all_users)
=======
userRoute.get('/', get_all_users);
userRoute.get('/:id', get_user_by_id);
userRoute.post('/', create_user);
>>>>>>> 87cf3a89174925d45ef0dfe3c1e2a5bd21eeea14

module.exports = userRoute;