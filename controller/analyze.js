const Analyze = require('../model/Analyze');
const ConsumerUnit = require('../model/ConsumerUnit');
const Contract = require('../model/Contract');
const Scenario = require('../model/Scenario');
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
        const contract = await Contract.findByPk(idContract);

        if (!contract) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        const analyzeCreate = await Analyze.create({
            date,
            idContract
        })

        const scenario = await Scenario.create({
            idAnalyzes: analyzeCreate.idAnalyzes,
            idCategory: parseInt(idCategory),
            idDealership: parseInt(idDealership)
        });
        // const scenario = await analyzeCreate.addScenario([{
        //     idAnalyze: analyzeCreate.idAnalyzes,
        //     idCategory: parseInt(idCategory),
        //     idDealership: parseInt(idDealership)
        // }]);
        
        
        await Analyze.update({ idScenario: scenario.idScenario }, {
            where: {
                idAnalyzes: analyzeCreate.idAnalyzes
            }
        });

        const analyzeResult = await Analyze.findAll({
            attributes: ['idAnalyzes', 'idContract', 'date', 'idScenario'],
            where: {
                idAnalyzes: analyzeCreate.idAnalyzes
            }
        });

        console.log(analyzeResult);
        return res.status(200).json(analyzeResult[0]);

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
        const analyzes = await Analyze.findAll({
            where: { idContract: idContract },
            // include: [ConsumerUnit, Category, Dealership]

        });
        return res.status(200).json(analyzes);

    } catch (err) {
        return res.status(500).json(err);
    }
}
