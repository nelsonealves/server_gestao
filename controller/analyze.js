const Analyze = require('../model/Analyze');
const ConsumerUnit = require('../model/ConsumerUnit');

module.exports.add = async (req, res) => {
    const {
        date
    } = req.body;
  

    const { idConsumerUnit } = req.params;
    try {
        const consumerUnit = await ConsumerUnit.findByPk(idConsumerUnit);
        
        if (!consumerUnit) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        const analyze = await Analyze.create({
            date,
            idConsumerUnit
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
        idConsumerUnit,
        status
     } = req.params;
    try {
        const consumerUnit = await ConsumerUnit.findByPk(idConsumerUnit);
        
        if (!consumerUnit) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        const analyze = await Analyze.create({
            date,
            idConsumerUnit
        })
        
        await ConsumerUnit.update(
            {
                status: status
            },{
                where : {
                    idConsumerUnit: idConsumerUnit
                }
            })
        return res.status(200).json(analyze);

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
        const analyzes = await Analyze.findAll({
            where: {idConsumerUnit: idConsumerUnit},
            // include: [ConsumerUnit, Category, Dealership]
            
              
        });
        return res.status(200).json(analyzes);

    } catch (err) {
        return res.status(500).json(err);
    }
}
