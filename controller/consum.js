const Scenario = require('../model/Scenario');
const ConsumerUnit = require('../model/ConsumerUnit');
const Consum = require('../model/Consum');
const Period = require('../model/Period');

module.exports.addMany = async (req, res) => {
    const {
        value
    } = req.body;

    
    const {
        idScenario
    } = req.params;

    try {
        const scenario = await Scenario.findByPk(idScenario);

        if (!scenario) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }
        console.log('values');
        console.log(req.body['value']);
        const consums = await Consum.bulkCreate(value);

        return res.status(200).json(consums);

    } catch (err) {
        return res.status(500).json(err);
    }

}

module.exports.addManyAndChangeStatus = async (req, res) => {
    const {
        value
    } = req.body;

    
    const {
        status,
        idConsumerUnit
    } = req.params;

    try {
        
        const consums = await Consum.bulkCreate(value);

        await ConsumerUnit.update(
            {
                status: status
            }, {
            where: {
                idConsumerUnit: idConsumerUnit
            }
        })

        return res.status(200).json(consums);

    } catch (err) {
        return res.status(500).json(err);
    }

}

module.exports.getAllByScenario = async (req, res) => {
    try {
        const {
            idScenario
        } = req.params;

        const scenario = await Scenario.findByPk(idScenario);

        /* Return error if contract doesnt exist */
        if (!scenario) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }
        const consum = await Consum.findAll(
            {
                where:{idScenario: idScenario},
                
            }
        );

        return res.status(200).json(consum);

    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.getByScenario = async (req, res) => {
    try {
        const {
            idScenario
        } = req.params;

        const scenario = await Scenario.findByPk(idScenario);

        /* Return error if contract doesnt exist */
        if (!scenario) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }
        const consums = await Consum.findAll(
            {
                where:{idScenario: idScenario},
                include: [Period]
                
            }
        );

        return res.status(200).json(consums);

    } catch (err) {
        return res.status(500).json(err);
    }
}