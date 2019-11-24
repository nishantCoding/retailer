const express =require('express');
const restaurantRouter = express.Router();

restaurantRouter.post('/', register_restaurant);
restaurantRouter.get('/:id', get_restaurant_by_id);
restaurantRouter.get('/all/:ownerId', get_all_restaurants);
//restaurantRouter.post('/', register_restaurant);