const bcrypt = require('bcrypt');


get_all_users = (req, resp) => {
    //get all users of the hotel, provide hotel id
    //only for owner/sa
    
}

get_user_by_id = (req, resp) => {
    //get an user of the hotel, provide username
    //only for owner/sa and the user itself
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

