const jwt = require('jsonwebtoken');
const authConfig = require('../config/environments.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader)
        return res.status(401).send({error: '_NO_TOKEN_PROVIDED'})

    const parts = authHeader.split(' ');
    if(!parts.length === 2)
        return res.status(401).send({error: "TOKEN_ERROR"});
    
    const [ scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({error: "TOKEN_MALFORMATED"})

        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if (err) return res.status(401).send({error: "TOKEN_INVALID"});
            req.idAuth = decoded.idAuth;
            return next()
        })
}