const Infrastructure = require('../model/Infrastructure');
const ConsumerUnit = require('../model/ConsumerUnit');

module.exports.add = async (req, res) => {
    const {
        capDisju,
        phases,
        capTransf
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
            idConsumerUnit
        })
     
        return res.status(200).json(infraStructure);

    } catch (err) {
        return res.status(500).json(err);
    }


}