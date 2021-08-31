const Contract = require('../model/Contract');
const ConsumerUnit = require('../model/ConsumerUnit');
const Dealership = require('../model/Dealership');
const Category = require('../model/Category');
const CategoryDealership = require('../model/CategoryDealership');
const Infrastructure = require('../model/Infrastructure');
const Bill = require('../model/Bill');
const Analyze = require('../model/Analyze');
const Scenario = require('../model/Scenario');
const Tariff = require('../model/Tariff');

module.exports.add = async (req, res) => {
    const {
        startDate,
        capDisju,
        phases,
        capTransf,
        icms
    } = req.body;

    const {
        idConsumerUnit,
        idDealership,
        idCategory } = req.params;

    try {
        const consumerUnit = await ConsumerUnit.findByPk(idConsumerUnit);
        const tariff = await Tariff.findOne({
            where: {
                idCategory,
                idDealership
            },
        });
        const dealership = await Tariff.findOne(idDealership);
        const category = await Category.findByPk(idCategory);

        if (!consumerUnit || !tariff) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        const infrastructure = await Infrastructure.create({
            capDisju,
            phases,
            capTransf,
            idConsumerUnit
        });

        const contract = await Contract.create({
            idConsumerUnit,
            idTariff: tariff.idTariff,
            icms,
            startDate
        })
        console.log("ConsumerUnit");
        console.log(consumerUnit);
        const contractJoin = await Contract.findByPk(contract.idContract, {
            include: [{ model: ConsumerUnit, include: [Infrastructure] }, Category, Dealership]
        })
        console.log('contract');
        console.log(ConsumerUnit);
        return res.status(200).json(contractJoin);

    } catch (err) {
        return res.status(500).json(err);
    }


}

module.exports.addAndChangeStatus = async (req, res) => {
    const {
        startDate,
        icms
    } = req.body;

    const {
        idConsumerUnit,
        idDealership,
        idCategory,
        status } = req.params;

    try {
        const consumerUnit = await ConsumerUnit.findByPk(idConsumerUnit);
        const tariff = await Tariff.findOne({
            where: {
                idCategory,
                idDealership
            },
        });

        if (!consumerUnit || !tariff) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }


        const contract = await Contract.create({
            idConsumerUnit,
            idTariff: tariff.idTariff,
            icms,
            startDate
        })


        await ConsumerUnit.update(
            {
                status: status
            }, {
            where: {
                idConsumerUnit: idConsumerUnit
            }
        })

        const contractJoin = await Contract.findByPk(contract.idContract, {
            include: [ConsumerUnit, { model: Tariff, include: [{ model: Dealership }, { model: Category }] }]
        })


        return res.status(200).json(contractJoin);

    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.addAndChangeStatusAndInfra = async (req, res) => {
    const {
        startDate,
        icms,
        capDisju,
        phases,
        capTransf,
        voltage
    } = req.body;

    const {
        idConsumerUnit,
        idDealership,
        idCategory,
        status } = req.params;

    try {
        const consumerUnit = await ConsumerUnit.findByPk(idConsumerUnit);
        const tariff = await Tariff.findOne({
            where: {
                idCategory,
                idDealership
            },
        });

        if (!consumerUnit || !tariff) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }


        const contract = await Contract.create({
            idConsumerUnit,
            idTariff: tariff.idTariff,
            icms,
            startDate
        })

        await Infrastructure.create({
            idConsumerUnit,
            capDisju,
            phases,
            capTransf,
            voltage
        })

        await ConsumerUnit.update(
            {
                status: status
            }, {
            where: {
                idConsumerUnit: idConsumerUnit
            }
        })

        const contractJoin = await Contract.findByPk(contract.idContract, {
            include: [{ model: ConsumerUnit, include: [Infrastructure] }, { model: Tariff, include: [{ model: Dealership }, { model: Category }] }]
        })


        return res.status(200).json(contractJoin);

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
        const contracts = await Contract.findAll({
            where: { idConsumerUnit: idConsumerUnit },
            include: [ConsumerUnit, Tariff]


        });


        return res.status(200).json(contracts);

    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.getByConsumerUnitAndBills = async (req, res) => {
    try {
        const {
            idConsumerUnit
        } = req.params;

        const consumerUnit = await ConsumerUnit.findByPk(idConsumerUnit);

        /* Returns error if dealership doesnt exist */
        if (!consumerUnit) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }
        const contracts = await Contract.findAll({
            where: { idConsumerUnit: idConsumerUnit },
            include: [ConsumerUnit, Tariff, Bill]

        });
        return res.status(200).json(contracts);

    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.getAnalyzes = async (req, res) => {
    try {
        const {
            idConsumerUnit
        } = req.params;

        const consumerUnit = await ConsumerUnit.findByPk(idConsumerUnit);

        /* Returns error if dealership doesnt exist */
        if (!consumerUnit) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }
        const contracts = await Contract.findAll({
            where: { idConsumerUnit: idConsumerUnit },
            include: [{ model: Analyze, as: 'analyze'}]

        });
        return res.status(200).json(contracts);

    } catch (err) {
        return res.status(500).json(err);
    }

}