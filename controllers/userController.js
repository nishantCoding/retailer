const bcrypt = require('bcrypt');
const responseProvider = require('../common/responseProvider');


get_all_users = async (req, resp) => {
    //get all users of the hotel, provide hotel id
    //only for owner/sa
    const { restaurantId } = req.params;
    try{
        // fetch from db...
        return responseProvider(resp,200,true,'Restaurants fetched successfully.',null,restaurants);
    }
    catch(e){
        return responseProvider(resp,500,true,'Not able to fetch Restaurants.')
    }
}

get_user_by_id = async(req, resp) => {
    //get an user of the hotel, provide username
    //only for owner/sa and the user itself
    const { id } = req.params;
    try{
        // fetch from db...
        return responseProvider(resp,200,true,'User fetched successfully.',null,user);
    }
    catch(e){
        return responseProvider(resp,500,true,'Not able to fetch User.')
    }
}

create_user = async(req, resp) => {
    //get an user of the hotel, provide username
    //only for owner/sa and the user itself
    const { username, name, email, password } = req.body;
    try{
        // fetch from db...
        return responseProvider(resp,200,true,'User fetched successfully.',null,user);
    }
    catch(e){
        return responseProvider(resp,500,true,'Not able to fetch User.')
    }
}

// create_user = (req, resp) => {
//     const { username, name, email, password } = req.body;
//     bcrypt.hash(password, 5, async function (err, hash) {
//         //store in db.. await for operation, send resp from here..
//     });
// }

module.exports = {
    create_user,
    get_all_users,
    get_user_by_id
}

