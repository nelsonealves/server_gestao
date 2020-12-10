
const User = require('../model/User');
const ConsumerUnit = require('../model/ConsumerUnit');

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

module.exports.getAllWithUnits = async (req, res) => {
    try {
        const users = await User.findAll({
            where: {
                idAuth: req.idAuth
            },
            include: [{model: ConsumerUnit, include: [User]}]
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

    const users = await User.findAll({
        where: {idUser: idUser},
        include: [ConsumerUnit] 
    })

    return res.status(200).json(users);
}
