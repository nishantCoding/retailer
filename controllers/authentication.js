const jwt = require('jsonwebtoken');
//const { secret } = require('config');
const bcrypt = require('bcryptjs');
const responseProvider  = require('../common/responseProvider');
const User = require('../models/user')

sign_in = async (req, resp) => {

    const { username, password } = req.body;
    if (username && password) {
        //check against db for existence, use bcrypt compare here.
        let user = await User.findOne({username:username});

        if (user) {

            //check password
            const passwordMatched = bcrypt.compareSync(password, user.password);
            if (!passwordMatched) {
                return responseProvider.responseProvider(resp, 401, false, 'Authentication Failed.Incorrect Password.');
            }

            //password matched, create token for future requests
            let token = jwt.sign({ username: user.username, roles: user.roles },
                'Ragasiya',
                {
                    expiresIn: '24h' // expires in 24 hours
                }
            );
            user = {
                id: user._id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                active: user.active,
                roles: user.roles
            }
            return responseProvider.responseProvider(resp, 200, true, 'Authentication Successful.', null, { ...user , token: token });
            // return the JWT token for the future API calls
        } 
        else {
            return responseProvider.responseProvider(resp, 401, false, `Authentication Failed.Username doesn't exist.`);
        }
    }
    else {
        return responseProvider.responseProvider(resp, 400, false, 'Authentication failed.Invalid request.');
    }
}

sign_up = async (req, resp, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return responseProvider.responseProvider(resp, 400, false, 'Authentication failed. Invalid Username and Password.');
    }
    //create a record in db..
    try {
        await createUser([name, email, password]);
        let user = findUserByEmail(email);

        const accessToken = jwt.sign({ id: user.id , roles: user.roles },
            secret,
            {
                expiresIn: '24h'
            });

      return postResponseProvider(res,201,true,'New User created successfully.',user.id)
    } catch (e) {
        resp.statusCode = 500;
        next(e)
    }
}

user_exists =async(req,resp,next)=>{
    const { username, password } = req.body;
    //check in db, if username already exists
    if(user.username){
        return responseProvider.responseProvider(resp,400,false,'Username already exists.');
    }
    next();
}

verify_token = (req, resp, next) => {  
   
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token && token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }
    
    if (token) {
        console.log('token',token)
        jwt.verify(token, 'Ragasiya', (err, decoded) => {
            if (err) {
                return responseProvider.responseProvider(resp, 400, false, 'Authentication failed. Invalid token.');
            } else {
                req.decoded = decoded;
                console.log('decoded',decoded);
                next();
            }
        });
    } else {
        return responseProvider.responseProvider(resp, 400, false, 'Authentication failed. Token not supplied.');
    }
};

module.exports = {
    sign_in,
    sign_up,
    verify_token
}
