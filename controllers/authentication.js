const jwt = require('jsonwebtoken');
const { secret } = require('config');

sign_in = (req, resp) => {

    const { username, password } = req.body;
    if (username && password) {
        //check against db for existence, use bcrypt compare here.
        if (username === mockedUsername && password === mockedPassword) {

            let token = jwt.sign({ username: username },
                secret,
                {
                    expiresIn: '24h' // expires in 24 hours
                }
            );
            // return the JWT token for the future API calls
            resp.status(201).json({
                success: true,
                message: 'Authentication successful!',
                token: token
            });
        }
        else {
            resp.send(403).json({
                success: false,
                message: 'Incorrect username or password'
            });
        }
    }
    else {
        resp.send(400).json({
            success: false,
            message: 'Authentication failed! Please check the request'
        });
    }
}

sign_up = async (req, resp, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        resp.json({ success: false, message: 'Please pass username and password.' })
    }
    //create a record in db..
    try {
        await createUser([name, email, password]);
        let user = findUserByEmail(email);

        const accessToken = jwt.sign({ id: user.id },
            secret,
            {
                expiresIn: '24h'
            });
        res.status(200).send({
            "user": user, "access_token": accessToken
        });
    } catch (e) {
        resp.statusCode = 500;
        next(e)
    }

}

verify_token = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(400).json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
};

module.exports = {
    sign_in,
    sign_up,
    verify_token
}
