const jwt = require('jsonwebtoken');
const { secret } = require('config');
const responseProvider  = require('../common/responseProvider');

sign_in = (req, resp) => {

    const { username, password } = req.body;
    if (username && password) {
        //check against db for existence, use bcrypt compare here.
        if (username === mockedUsername && password === mockedPassword) {

            let token = jwt.sign({ username: username, roles: roles },
                secret,
                {
                    expiresIn: '24h' // expires in 24 hours
                }
            );
            return responseProvider.responseProvider(resp, 200, true, 'Authentication Successful.', null, { token: token });
            // return the JWT token for the future API calls
        }
        else {
            return responseProvider.responseProvider(resp, 401, false, 'Authentication Failed.Incorrect Username or Password');
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

verify_token = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                return responseProvider.responseProvider(resp, 400, false, 'Authentication failed. Invalid token.');
            } else {
                req.decoded = decoded;
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
