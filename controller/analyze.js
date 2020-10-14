const Analyze = require('../model/Analyze');
const ConsumerUnit = require('../model/ConsumerUnit');
const Contract = require('../model/Contract');

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
        status
     } = req.params;
    try {
        const contract = await Contract.findByPk(idContract);
        
        if (!contract) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        const analyze = await Analyze.create({
            date,
            idContract
        })
        
        await ConsumerUnit.update(
            {
                status: status
            },{
                where : {
                    idConsumerUnit: contract.idConsumerUnit
                }
            })
        return res.status(200).json(analyze);

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
            where: {idContract: idContract},
            // include: [ConsumerUnit, Category, Dealership]
              
        });
        return res.status(200).json(analyzes);

    } catch (err) {
        return res.status(500).json(err);
    }
}
