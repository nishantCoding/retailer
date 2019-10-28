<<<<<<< HEAD
get_all_users = (req, resp) => {
    resp.json([{ id: 1, role: 'owner' }, { id: 2, role: 'admin' }]);
}

module.exports = { get_all_users }
=======
const bcrypt = require('bcrypt');

get_all_users = (req, resp) => {
    //dummy data
    resp.json([{ id: 1, role: 'owner' }, { id: 2, role: 'admin' }]);
}

get_user_by_id = (req, resp) => {
    //dummy data
    resp.json([{ id: 1, role: 'owner' }, { id: 2, role: 'admin' }]);
}

create_user = (req, resp) => {
    const { username, name, email, password } = req.body;
    bcrypt.hash(password, 5, async function (err, hash) {
        //store in db.. await for operation, send resp from here..
    });
}

module.exports = {
    create_user,
    get_all_users,
    get_user_by_id
}

>>>>>>> 87cf3a89174925d45ef0dfe3c1e2a5bd21eeea14
