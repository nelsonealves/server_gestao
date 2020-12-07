const { Op } = require("sequelize");
const Auth = require('../model/Auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const enviroments = require('../config/environments');

module.exports.register = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password
    } = req.body;
    
    try {
        const auth = await Auth.findOne({
            where: {
                email                
            }
        });
        
        if (auth) {
            return res.status(401).json({ error: 'EMAIL_ALREADY_EXISTS' });
        }

        const newAuth = await Auth.create({
            firstName,
            lastName,
            email,
            password: await bcrypt.hash(password, 10)
        })

        newAuth.password = await undefined;
        return res.status(200).json(newAuth);

    } catch (err) {
        return res.status(500).json(err);
    }


}

module.exports.authenticate = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    
    try {
        const auth = await Auth.findOne({
            where: {
                email                
            }
        });
        
        if (!auth) {
            return res.status(401).json({ error: 'USR_NOT_FOUND' });
        }
        if (!await bcrypt.compare(password, auth.password)){
            return res.status(401).json({ error: 'INVALID_PASSWORD' });
        }

        auth.password = undefined;

        const token = jwt.sign({id: auth.id}, enviroments.secret, {
            expiresIn: 86400
        } )

        return res.status(200).json({auth,token});

    } catch (err) {
        return res.status(500).json(err);
    }


}