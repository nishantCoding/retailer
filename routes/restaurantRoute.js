const express =require('express');
const restaurantRouter = express.Router();

restaurantRouter.post('/', register_restaurant);
restaurantRouter.get('/:id', get_restaurant_by_id);
restaurantRouter.get('/:ownerId', get_all_restaurants_of_an_owner);

//restaurantRouter.post('/', register_restaurant);