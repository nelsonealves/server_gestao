const User = require('../model/User');
const Dealership = require('../model/Dealership');
const ConsumerUnit = require('../model/ConsumerUnit');
const Contract = require('../model/Contract');
const Analyze = require('../model/Analyze');
const Scenario = require('../model/Scenario');
const Infrastructure = require('../model/Infrastructure');
const Consum = require('../model/Consum');
const Demand = require('../model/Demand');
const Bill = require('../model/Bill');
const Category = require('../model/Category');
const Tariff = require('../model/Tariff');
const Period = require('../model/Period');

const Conventional = require('../model/Conventional');
const White = require('../model/White');
const Green = require('../model/Green');
const Blue = require('../model/Blue');
const Diesel = require('../model/Diesel');
const Substation = require('../model/Substation');
const Tribute = require('../model/Tribute');


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
            include: [{ model: User }]
        }).then(parent => {
            return res.status(200).json(parent);
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

module.exports.changeStatus = async (req, res) => {

    const {
        idConsumerUnit,
        status
    } = req.params;

    const user = await ConsumerUnit.findByPk(idConsumerUnit);

    if (!user) return res.status(400).json({ error: 'OBJ_NOT_FOUND' });

    const [numberOfAffectedRows, affectedRows] = await ConsumerUnit.update(
        {
            status: status
        }, {
        where: {
            idConsumerUnit: idConsumerUnit
        }
    })
    return res.status(200).json({ numberOfAffectedRows, affectedRows })
}

module.exports.getByStatus = async (req, res) => {

    const {
        idConsumerUnit,
    } = req.params;

    try {
        const { idConsumerUnit } = req.params;

        const consumer = await ConsumerUnit.findOne({
            where: { idConsumerUnit: idConsumerUnit },
            include: [
                {
                    model: User
                }, {
                    model: Contract,
                    include: [{
                        model: Analyze,
                        include: [
                            Diesel,
                            Substation,
                            {
                                model: Scenario, as: 'scenarios',
                                include: [{
                                    model: Tariff,
                                    include: [{
                                        model: Category,
                                    }
                                    ]
                                }, {
                                    model: Consum, as: 'Consums',
                                    include: [{
                                        model: Period,
                                    }]
                                }, { model: Demand, as: 'Demands' }]
                            }]
                    }, {
                        model: Bill
                    }, {
                        model: Tariff,
                        include: [
                            {
                                model: Dealership,
                                include: [
                                    {
                                        model: Tribute
                                    }
                                ]
                            },
                            {model: Category}
                        ]
                    }]
                },
                { model: Infrastructure }
            ],

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
            where: { idConsumerUnit: idConsumerUnit },
            include: [{ model: User }],

        }).then(parent => {
            return res.status(200).json(parent);
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }

}