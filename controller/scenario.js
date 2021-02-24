const Scenario = require('../model/Scenario');
const Analyze = require('../model/Analyze');
const Category = require('../model/Category');
const Tariff = require('../model/Tariff');
const Consum = require('../model/Consum');
const Demand = require('../model/Demand');
const { Op } = require('sequelize')

module.exports.add = async (req, res) => {
    const {
        investiment,
        valueTotal,
        payback
    } = req.body;


    const {
        idAnalyzes,
        idCategory,
        idDealership } = req.params;
    try {
        const analyze = await Analyze.findByPk(idAnalyzes);
        const tariff = await Tariff.findAll({
            where: { idDealership, idCategory },
        });

        if (!analyze || !tariff) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        const scenario = await Scenario.create({
            idAnalyzes: parseInt(idAnalyzes),
            idTariff: tariff[0].idTariff,
            investiment,
            valueTotal,
            payback
        })
        console.log('scenario');
        console.log(scenario);

        return res.status(200).json(scenario);

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }

}

module.exports.addConsumDemand = async (req, res) => {
    const {
        investiment,
        valueTotal,
        payback,
        consum,
        demand
    } = req.body;

    const {
        idAnalyzes,
        idCategory,
        idDealership } = req.params;

    try {
        const analyze = await Analyze.findByPk(idAnalyzes);
        const tariff = await Tariff.findAll({
            where: { idDealership, idCategory },
        });

        if (!analyze || !tariff) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        const scenario = await Scenario.create({
            idAnalyzes: parseInt(idAnalyzes),
            idTariff: tariff[0].idTariff,
            investiment,
            valueTotal,
            payback
        })
        if (consum) {
            for (let x of consum) {
                await Consum.create({
                    ...x,
                    idScenario: scenario.idScenario
                })
            }
        }

        if (demand) {
            for (let x of demand) {
                await Demand.create({
                    ...x,
                    idScenario: scenario.idScenario,
                    status: 0
                })
            }
        }

        return res.status(200).json(scenario);

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }

}

module.exports.addMany = async (req, res) => {
    const {
        values
    } = req.body;


    const {
        idAnalyzes,
        idCategory,
        idDealership } = req.params;
    try {
        const analyze = await Analyze.findByPk(idAnalyzes);
        const categoryDealership = await Category.findOne({
            where: {
                [Op.and]: [
                    {
                        idDealership: idDealership
                    },
                    {
                        idCategory: idCategory
                    }
                ]
            }
        });


        if (!analyze || !categoryDealership) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        const scenarios = await Scenario.bulkCreate(values);

        return res.status(200).json(scenarios);

    } catch (err) {
        return res.status(500).json(err);
    }

}

module.exports.getByAnalyzes = async (req, res) => {
    try {
        const {
            idAnalyzes
        } = req.params;

        const analyze = await Analyze.findByPk(idAnalyzes);

        /* Return error if contract doesnt exist */
        if (!analyze) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }
        const scenarios = await Scenario.findAll(
            {
                where: { idAnalyzes: idAnalyzes },
                include: [{ model: Tariff, include: [{ model: Category }] }]
            }
        );

        return res.status(200).json(scenarios);

    } catch (err) {
        return res.status(500).json(err);
    }
}

