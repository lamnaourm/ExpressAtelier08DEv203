const jwt = require('jsonwebtoken')

function verifToken(req, res, next){

    const authAuthorisation = req.headers['authorisation'];
    const token = authAuthorisation && authAuthorisation.split(' ')[1];

    if(!token)
        return res.status(401).json({message: 'Token not specified'})

    const secret = process.env.CLE_SECRET; 

    jwt.verify(token,secret, (err, userData) => {
        if(err)
            return res.status(401).json({message: 'Token not valid'})

        req.user = userData;
        next();

    });
}

module.exports = verifToken