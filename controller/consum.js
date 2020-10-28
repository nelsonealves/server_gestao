const Scenario = require('../model/Scenario');
const Consum = require('../model/Consum');

module.exports.addMany = async (req, res) => {
    const {
        value
    } = req.body;

    
    const {
        idScenario
    } = req.params;

    console.log('idScenario');
    console.log(idScenario);
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
                
            }
        );

        return res.status(200).json(consums);

    } catch (err) {
        return res.status(500).json(err);
    }
}