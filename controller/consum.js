const Scenario = require('../model/Scenario');
const Consum = require('../model/Consum');

module.exports.addMany = async (req, res) => {
    const {
        values
    } = req.body;


    const {
        idScenario
    } = req.params;
    try {
        const scenario = await Scenario.findByPk(idScenario);

        if (!scenario) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        const consums = await Consum.bulkCreate(values);

        return res.status(200).json(scenarios);

    } catch (err) {
        return res.status(500).json(err);
    }

}
