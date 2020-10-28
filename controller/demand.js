const Scenario = require('../model/Scenario');
const Demand = require('../model/Demand');

module.exports.addMany = async (req, res) => {
    const {
        value
    } = req.body;

    try {
        
        const demands = await Demand.bulkCreate(value);
        console.log('demands');
        console.log(demands);
        return res.status(200).json(demands);

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
        const demands = await Demand.findAll(
            {
                where: { idScenario: idScenario },
            }
        );

        return res.status(200).json(consums);

    } catch (err) {
        return res.status(500).json(err);
    }
}
