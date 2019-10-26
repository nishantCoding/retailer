const jwt = require('jsonwebtoken');
const { secret } = require('config');

sign_in = (req, resp) => {

    const { username, password } = req.body;
    if (username && password) {
        //check against db for existence
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

sign_up = (req,resp) =>{
    const { username, password } = req.body;
    if(!username || !password){
        resp.json({success : false, message : 'Please pass username and password.'})
    }
}







