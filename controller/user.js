
const User = require('../model/User');
const ConsumerUnit = require('../model/ConsumerUnit');
const Auth = require('../model/Auth');
const { Op } = require("sequelize");

module.exports.add = async (req, res) => {
    const {
        name,
        identification,
        email,
        tel1,
        tel2,
    } = req.body;

    try {

        const user = await User.create({
            name,
            identification,
            email,
            tel1,
            tel2,
            idAuth: req.idAuth
        })

        console.log('user');
        console.log(user);
        return res.status(200).json(user);

    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.getAll = async (req, res) => {
    try {
        const users = await User.findAll({
            where: {
                idAuth: req.idAuth
            }
        });

        /* Returns error if dealership doesnt exist */
        if (!users) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }
        return res.status(200).json(users);

    } catch (err) {
        return res.status(500).json(err);
    }

}

module.exports.getAuthClients = async (req, res) => {
    const {
        idAuth
    } = req.params;

    try {
        const auth = await User.findAll({
            where: {
                [Op.or]: [
                    { idAuth: null },
                    { idAuth: idAuth }
                ]
            }
        });

        if (!auth) {
            return res.status(401).json({ error: 'USR_NOT_FOUND' });
        }

        const authAux = auth.map(value => {
            value.password = undefined;
            return value;
        })
        return res.status(200).json(authAux);


    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}


module.exports.getAllWithUnits = async (req, res) => {
    try {
        const users = await User.findAll({
            where: {
                idAuth: req.idAuth
            },
            include: [{ model: ConsumerUnit, include: [User] }]
        });

        /* Returns error if dealership doesnt exist */
        if (!users) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }
        let consumerUnits = [];

        for (let user of users) {
            await consumerUnits.push(...user.ConsumerUnits)
        }

        return res.status(200).json(consumerUnits);

    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.getDealershipInclude = async (req, res) => {

    const { userId } = req.params;

    try {

        User.findByPk(userId, { include: [Dealership] })
            .then(value => {
                res.json(value)
            })
    } catch (err) {
        res.json(err)
    }

}

module.exports.getConsumer = async (req, res) => {
    const {
        idUser
    } = req.params;
    try {
        const users = await User.findOne({
            where: { idUser: idUser },
            include: [ConsumerUnit]
        })
        users.password = undefined;
        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.update = async (req, res) => {
    const {
        idUser
    } = req.params;

    const {
        body
    } = req.body;

    try {
        const user = await User.findOne({
            where: {
                idUser
            },
        });

        /* Returns error if dealership doesnt exist */
        if (!user) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }

        const userPut = await User.update(body, {
            where: {
                idUser
            }
        });

        return res.status(200).json(userPut);

    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.updateIdAuth = async (req, res) => {
    const {
        idUser
    } = req.params;

    const {
        idAuth
    } = req.body;

    console.log('idAuth')
    console.log(idAuth)

    try {
        const user = await User.findOne({
            where: {
                idUser
            },
        });

        console
        /* Returns error if dealership doesnt exist */
        if (!user) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }

        const userPut = await User.update({ idAuth: idAuth }, {
            where: {
                idUser
            }
        });

        return res.status(200).json(userPut);

    } catch (err) {
        return res.status(500).json(err);
    }
}


