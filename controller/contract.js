const Contract = require('../model/Contract');
const ConsumerUnit = require('../model/ConsumerUnit');
const Dealership = require('../model/Dealership');
const Category = require('../model/Category');

module.exports.add = async (req, res) => {
    const {
        startDate
    } = req.body;


    const { 
        idConsumerUnit, 
        idDealership,
        idCategory } = req.params;
    try {
        const consumerUnit = await ConsumerUnit.findByPk(idUser);
        const dealership = await Dealership.findByPk(idUser);
        const category = await Category.findByPk(idUser);

        if (!consumerUnit && ! dealership && !category) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        const contract = await Contract.create({
            idConsumerUnit,
            idDealership,
            idCategory,
            startDate
        })

        return res.status(200).json(contract);

    } catch (err) {
        return res.status(500).json(err);
    }


}

module.exports.getAll = async (req, res) => {

    try {
        const contract = await Contract.findAll();

        /* Returns error if dealership doesnt exist */
        if (!contract) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }

        return res.status(200).json(contract);

    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.getByConsumerUnit = async (req, res) => {
    try {
        const {
            idConsumerUnit
        } = req.params;
        
        const consumerUnit = await ConsumerUnit.findByPk(idConsumerUnit);

        /* Returns error if dealership doesnt exist */
        if (!consumerUnit) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }
        const contracts = await ConsumerUnit.findAll({
            where: {idConsumerUnit: idConsumerUnit}   
        });
        return res.status(200).json(contracts);

    } catch (err) {
        return res.status(500).json(err);
    }
}