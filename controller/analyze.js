const Analyze = require('../model/Analyze');
const ConsumerUnit = require('../model/ConsumerUnit');
const Contract = require('../model/Contract');
const Category = require('../model/Category');
const Scenario = require('../model/Scenario');
const Tariff = require('../model/Tariff');
const Consum = require('../model/Consum');
const Demand = require('../model/Demand');

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
        demand,
        valueTotal,
        substation,
        diesel
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
            substation,
            diesel,
            valueTotal: valueTotal,
           
        })

        analyzeCreate.idScenario = scenario.idScenario;
        await analyzeCreate.save();
      
        consum.map(async value => {
            const consumModel = await Consum.create({
                ...value, 
                    idScenario: scenario.idScenario
            })
        })
        if(demand){
            demand.map(async value => {
                const demandModel = await Demand.create({
                    ...value, 
                        idScenario: scenario.idScenario
                })
            })
        }
        
        
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
            idAnalyze
        } = req.params;

        const analyze = await Analyze.findByPk(idAnalyze);

        /* Return error if contract doesnt exist */
        if (!analyze) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }
        console.log(analyze.idAnalyzes)
        const analyzeScenarios = await Analyze.findOne(
            {
                where: { idAnalyzes: analyze.idAnalyzes },
                include: [
                    {
                        model: Scenario,
                        as: 'scenarios', 
                        include: [
                            { 
                                model: Tariff, 
                                include: [{ 
                                    model: Category }] 
                                }
                            ]
                        }
                    ]
            }
        );

        return res.status(200).json(analyzeScenarios.scenarios);

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

// module.exports.getIncludeScenarios = async (req, res) => {
//     try {
//         const {
//             idAnalyzes
//         } = req.params;

//         const analyze = await Analyze.findByPk(idAnalyzes);

//         /* Return error if contract doesnt exist */
//         if (!analyze) {
//             return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
//         }
//         const analyzeScenarios = await Analyze.findOne(
//             {
//                 where: { idAnalyzes: idAnalyzes },
//                 include: [
//                     {
//                         model: Scenario, 
//                         include: [
//                             { 
//                                 model: Tariff, 
//                                 include: [{ 
//                                     model: Category }] 
//                                 }
//                             ]
//                         }
//                     ]
//             }
//         );

//         return res.status(200).json(analyzeScenarios);

//     } catch (err) {
//         return res.status(500).json(err);
//     }
// }

module.exports.delete = async (req, res) => {
    const {
        idAnalyzes
    } = req.params;

    try {

        const analyze = Analyze.findByPk(idAnalyzes);

        if (!analyze) {
            return res.status(404).json({ error: "OBJ_NOT_FOUND" });
        }
        
        const analyzes = await Analyze.destroy({
            where: {idAnalyzes},
        })
        
        return res.status(200).json(analyzes);
        

    } catch (err) {
        return res.status(500).json(err);
    }


}