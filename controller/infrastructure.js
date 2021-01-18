const Infrastructure = require('../model/Infrastructure');
const ConsumerUnit = require('../model/ConsumerUnit');

module.exports.add = async (req, res) => {
    const {
        capDisju,
        phases,
        capTransf,
        voltage
    } = req.body;
  

    const { idConsumerUnit } = req.params;
    try {
        const consumerUnit = await ConsumerUnit.findByPk(idConsumerUnit);
        
        if (!consumerUnit) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        const infraStructure = await Infrastructure.create({
            capDisju,
            phases,
            capTransf,
            voltage,
            idConsumerUnit
        })
     
        return res.status(200).json(infraStructure);

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
        const infrastructure = await Infrastructure.findAll({
            where: {idConsumerUnit: idConsumerUnit},
              
        });
        return res.status(200).json(infrastructure);

    } catch (err) {
        return res.status(500).json(err);
    }
}