
const Simulation = require('../model/Simulation');


module.exports.add = async (req, res) => {
    const {
        idScenario,
    } = req.params;

    try {
        const simulation = await Simulation.create({
            idScenario: idScenario,
            bills
        })

        if (!simulation) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        return res.status(200).json(simulation);

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

module.exports.getByIdScenario = async (req, res) => {
const {
        idScenario,
    } = req.params;
    
    try {
        const simulation = await Simulation.findOne({
            where: { idScenario },
        });

        if (!simulation) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        return res.status(200).json(simulation);

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}
module.exports.update = async (req, res) => {

}
module.exports.delete = async (req, res) => {

}
