const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const responseProvider = require('../common/responseProvider');

const User = require('../models/user')


get_all_users = async (req, resp) => {
    //get all users of the hotel, provide hotel id
    //only for owner/sa
    const { restaurantId } = req.params;
    try {
        // fetch from db...
        return responseProvider.responseProvider(resp, 200, true, 'Restaurants fetched successfully.', null, { id: restaurantId, name: 'Nishant' });
    }
    catch (e) {
        return responseProvider(resp, 500, true, 'Not able to fetch Restaurants.')
    }
}

get_user_by_id = async (req, resp) => {
    //get an user of the hotel, provide username
    //only for owner/sa and the user itself
    const { id } = req.params;
    try {
        let user = await User.findById(id);
        user = {
            id: id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            active: user.active,
            roles: user.roles
        }
        console.log('reached',user)
        return responseProvider.responseProvider(resp, 200, true, 'User fetched successfully.', null, user);
    }
    catch (e) {
        return responseProvider.errorProvider(resp, 500, undefined, 'Something went bad on server. Not able to fetch User.')
    }
}

create_user = async (req, resp) => {
    //get an user of the hotel, provide username
    //only for owner/sa and the user itself

    const { username, email, firstName, lastName, password, active, roles } = req.body;

    try {
        let user = await User.findOne({ username: username, email: email });
       
        if(user && user.username){
            return responseProvider.postResponseProvider(resp, 403, false, 'Username already exists.', null, null);
        }

        if (!user) {
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password, salt);
            console.log('**hashedPassword', hashedPassword);
            user = await User.create({
                username,
                email,
                firstName,
                lastName,
                password: hashedPassword,
                roles,
                active
            });           
            let token = jwt.sign({ username: username, roles: roles },
                'Ragasiya',
                {
                    expiresIn: '24h' // expires in 24 hours
                }
            );
            const data = {  id: user._id, token: token, username:user.username,email:user.email, firstName:user.firstName, lastName:user.lastName,roles:user.roles,active:user.active }
           
            return responseProvider.postResponseProvider(resp, 200, true, 'User created successfully.', null, data);
        }
    }
    catch (e) {
        console.log('create user err', e)
        return responseProvider.errorProvider(resp, 500, undefined, 'Something went bad on server. Not able to create User.')
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

