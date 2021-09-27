const ConsumerUnit = require('../model/ConsumerUnit');
const Contract = require('../model/Contract');
const State = require('../model/State');
const Dealership = require('../model/Dealership');
const Category = require('../model/Category');
const Tribute = require('../model/Tribute');
const Tariff = require('../model/Tariff');
const Blue = require('../model/Blue');
const Green = require('../model/Green');
const White = require('../model/White');
const Conventional = require('../model/Conventional');

module.exports.add = async (req, res) => {
    const {
        name,
        cnpj,
        email,
        tel1,
        tel2,
        cep,
        numCep,
    } = req.body;


    const { uf } = req.params;
    try {
        const ufObj = await State.findByPk(uf);

        if (!ufObj) {
            return res.status(400).json({ error: 'FOREIGN_NOT_FOUND' });
        }

        const dealership = await Dealership.create({
            name,
            cnpj,
            email,
            tel1,
            tel2,
            cep,
            numCep,
            uf
        })

        return res.status(200).json(dealership);

    } catch (err) {
        return res.json(err);
    }



}

module.exports.getById = async (req, res) => {
    const {
        idDealership
    } = req.params;

    try {
        const dealership = await Dealership.findByPk(idDealership);

        /* Returns error if dealership doesnt exist */
        if (!dealership) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }

        return res.status(200).json(dealership);

    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.getByConsumerUnit = async (req, res) => {
    const {
        idConsumerUnit
    } = req.params;

    try {
        const consumer = await ConsumerUnit.findOne(
            {
                where: { idConsumerUnit: idConsumerUnit },
                include: [{
                    model: Contract,
                    include: [{
                        model: Tariff,
                        include: [{
                            model: Dealership,
                        }]
                    }]
                }]
            });

        /* Returns error if dealership doesnt exist */
        if (!consumer) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }

        console.log(consumer)
        return res.status(200).json(consumer.Contracts[0].Tariff.Dealership);

    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
}

module.exports.getTributes = async (req, res) => {
    const {
        idDealership
    } = req.params;

    try {
        const dealership = await Dealership.findOne(
            {
                where: { idDealership: idDealership },
                include: {
                    model: Tribute,
                    attributes: ['cofins', 'pis', 'date']
                }
            });

        /* Returns error if dealership doesnt exist */
        if (!dealership) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }

        return res.status(200).json(dealership);

    } catch (err) {
        return res.status(500).json(err);
    }
}


module.exports.getTributesAndTariff = async (req, res) => {
    const {
        idDealership
    } = req.params;

    try {
        const dealership = await Dealership.findOne(
            {
                where: { idDealership: idDealership },
                include: [{
                    model: Tribute,
                    attributes: ['cofins', 'pis', 'date']
                }, {
                    model: Tariff,
                    include: [
                        { model: Blue, as: 'blue' },
                        { model: Green, as: 'green' },
                        { model: White, as: 'white' },
                        { model: Conventional, as: 'conventional' }
                    ]
                }]
            });

        /* Returns error if dealership doesnt exist */
        if (!dealership) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }

        return res.status(200).json(dealership);

    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.getAll = async (req, res) => {
    try {
        const dealerships = await Dealership.findAll();

        /* Returns error if dealership doesnt exist */
        if (!dealerships) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }

        return res.status(200).json(dealerships);

    } catch (err) {
        return res.status(500).json(err);
    }

}

module.exports.getCategories = async (req, res) => {
    try {
        const { idDealership } = req.params;

        const categories = await Tariff.findAll({
            where: { idDealership: idDealership },
            include: [{ model: Category }],

        }).then(parent => {
            let category = parent.map(res => {
                return res.Category;
            })
            return res.status(200).json(category);
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }

}


