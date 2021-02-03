const Analyze = require('../model/Analyze');
const ConsumerUnit = require('../model/ConsumerUnit');
const Contract = require('../model/Contract');
const Scenario = require('../model/Scenario');
const Tariff = require('../model/Tariff');

module.exports.add = async (req, res) => {
    const {
        date
    } = req.body;


    const { idContract } = req.params;
    try {
        const contract = await Contract.findByPk(idContract);

        if (!contract) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        const analyze = await Analyze.create({
            date,
            idContract
        })

        return res.status(200).json(analyze);

    } catch (err) {
        return res.status(500).json(err);
    }


}

module.exports.addAnalyzesAndScenarioRef = async (req, res) => {
    const {
        date,
        consum,
        demand
    } = req.body;

    const {
        idContract,
        idCategory,
        idDealership,
        status
    } = req.params;
    try {
        const contract = await Contract.findOne({
            where: {idContract},
        });

        const tariff = await Tariff.findAll({
            where: { idDealership, idCategory },
        });
  
        if (!contract || !tariff[0].idTariff) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        const analyzeCreate = await Analyze.create({
            date: new Date(),
            idContract
        })

        const scenario = await Scenario.create({
            idAnalyzes: parseInt(analyzeCreate.idAnalyzes),
            idTariff: tariff[0].idTariff,
            investiment: 0,
            valueTotal: 0,
            payback: 0
        })

        analyzeCreate.idScenario = scenario.idScenario;
        await analyzeCreate.save();

        return res.status(200).json(analyzeCreate);

    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.addAndIncrementStatus = async (req, res) => {
    const {
        date
    } = req.body;


    const {
        idContract,
        idCategory,
        idDealership,
        status
    } = req.params;
    try {
        const contract = await Contract.findOne({
            where: {idContract},
            include: [ConsumerUnit]

        });
        const tariff = await Tariff.findAll({
            where: { idDealership, idCategory },
        });
  
        if (!contract || !tariff[0].idTariff) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        const analyzeCreate = await Analyze.create({
            date: new Date(),
            idContract
        })

        const scenario = await Scenario.create({
            idAnalyzes: parseInt(analyzeCreate.idAnalyzes),
            idTariff: tariff[0].idTariff,
            investiment: 0,
            valueTotal: 0,
            payback: 0
        })

        analyzeCreate.idScenario = scenario.idScenario;
        await analyzeCreate.save();

        console.log('contract')
        console.log(contract)

        await ConsumerUnit.update(
            {
                status: status
            }, {
            where: {
                idConsumerUnit: contract.ConsumerUnit.idConsumerUnit
            }
        })
        

        return res.status(200).json(analyzeCreate);

    } catch (err) {
        return res.status(500).json(err);
    }
}


module.exports.getByContract = async (req, res) => {
    try {
        const {
            idContract
        } = req.params;

        const contract = await Contract.findByPk(idContract);

        /* Return error if contract doesnt exist */
        if (!contract) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }
        const analyzes = await Analyze.findOne({
            where: { idContract: idContract },
        });
        return res.status(200).json(analyzes);

    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.getByConsumerUnit = async (req, res) => {
    try {
        const {
            idConsumerUnit
        } = req.params;

        /* Return error if contract doesnt exist */
       
        const contracts = await Contract.findAll({
            where: { idConsumerUnit: idConsumerUnit },
            include: [Analyze]
        });

        if (!contracts) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }

        let analyzes = contracts.map(res => {return res.Analyzes})
        return res.status(200).json(...analyzes);

    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.getAllAnalyzes = async (req, res) => {
    try {
        const {
            idContract
        } = req.params;

        
        const analyzes = await Analyze.findAll();
        return res.status(200).json(analyzes);

    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.getIncludeScenarios = async (req, res) => {
    try {
        const {
            idContract
        } = req.params;

        const contract = await Contract.findByPk(idContract);

        /* Return error if contract doesnt exist */
        if (!contract) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }
        const analyzes = await Analyze.findOne({
            where: { idContract: idContract },
            include: [Scenario]

        });
        return res.status(200).json(analyzes);

    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.update = async (req, res) => {
    const {
        idAnalyzes
    } = req.params;

    try {

        const analyze = Analyze.findByPk(idAnalyzes);

        if (!analyze) {
            return res.status(404).json({ error: "OBJ_NOT_FOUND" });
        }

        const analyzeUpdate = await Analyze.update({}, {
            where: {
                idAnalyzes: analyzeCreate.idAnalyzes
            }
        });

    } catch (err) {
        return res.status(500).json(err);
    }


}