const { Op } = require("sequelize");
const Auth = require('../model/Auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const enviroments = require('../config/environments');
const bodyParser = require('body-parser');

express.post('/register', async (req, res) => {
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
            return res.status(401).json({ 
                error: 'EMAIL_ALREADY_EXISTS', 
                auth});
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
});

express.post('/authenticate', async (req, res) => {
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
        if (!await bcrypt.compare(password, auth.password)) {
            return res.status(401).json({ error: 'INVALID_PASSWORD' });
        }

        auth.password = undefined;

        const token = jwt.sign({ idAuth: auth.idAuth }, enviroments.secret, {
            expiresIn: 86400
        })

        return res.status(200).json({ auth, token });

    } catch (err) {
        return res.status(500).json(err);
    }

});

