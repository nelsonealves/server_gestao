const User = require('../model/User');
const Dealership = require('../model/Dealership');
const ConsumerUnit = require('../model/ConsumerUnit');


module.exports.add = async (req, res) => {
    const {
        name,
        status,
        identification,
    } = req.body;


    const { idUser } = req.params;
    try {
        const user = await User.findByPk(idUser);

        if (!user) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        const consumerUnit = await ConsumerUnit.create({
            name,
            status,
            identification,
            idUser,

        })

        return res.status(200).json(consumerUnit);

    } catch (err) {
        return res.status(500).json(err);
    }


}

module.exports.getAll = async (req, res) => {

    try {
        const consumerUnit = await ConsumerUnit.findAll();

        /* Returns error if dealership doesnt exist */
        if (!consumerUnit) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }

        return res.status(200).json(consumerUnit);

    } catch (err) {
        return res.status(500).json(err);
    }



}

module.exports.getAllAndJoinConsumerWithUser = async (req, res) => {
    try {
        const consumerUnit = await ConsumerUnit.findAll({
            include: [{model: User}]
        }).then(parent => {
            return res.status(200).json(parent);
        })
    
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

module.exports.JoinConsumerAndUser = async (req, res) => {
    try {
        const { idConsumerUnit } = req.params;
       
        const consumer = await ConsumerUnit.findOne({
            where: {idConsumerUnit: idConsumerUnit},
            include: [{model: User}],
            
    }).then(parent => {
        return res.status(200).json(parent);
    })
    
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
    
}