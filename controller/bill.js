const Contract = require('../model/Contract')
const Bill = require('../model/Bill')

module.exports.add = async (req, res) => {
    const {
        measures,
        date,
    } = req.body;

    
    console.log(measures)


    const { idContract } = req.params;
    try {
        const contract = await Contract.findByPk(idContract);

        if (!contract) {
            console.log('errou')
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        const bill = await Bill.create({
            measures,
            date,
            idContract,
        })

        return res.status(200).json(bill);

    } catch (err) {
        console.log(err)
        console.log('err')
        return res.status(500).json(err);
    }

}

module.exports.getAll = async (req, res) => {
    try {
        const bills = await Bill.findAll();

        /* Returns error if dealership doesnt exist */
        if (!bills) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }

        return res.status(200).json(bills);

    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.getByContract = async (req, res) => {
    const {
        idContract
    } = req.params;

    try {
        const category = await Contract.findOne({
            where: {idContract: idContract},
            include: [{model: Bill}],
            
    }).then(parent => {
        return res.status(200).json(parent);
    })

    } catch (err) {
        return res.status(500).json(err);
    }

}

module.exports.update = async (req, res) => {
    const {
        idBill
    } = req.params;

    const {
        measures
    } = req.body;
    
    try {
        
        const checkBill = await Bill.findByPk(idBill);
        
        if (!checkBill) return res.status(400).json({error: "OBJ_NOT_FOUND"});

        const bill = await Bill.update({measures}, {
            returning: true,
            where: {
                idBill
            }
          });
          return res.status(200).json(bill)
    } catch (err) {
        return res.status(500).json(err)
    }

    
}

module.exports.getByConsumerUnit = async (req, res) => {
    const {
        idConsumerUnit
    } = req.params;

    try {
 
        const contracts = await Contract.findAll({
            where: {idConsumerUnit: idConsumerUnit},
            include: [{model: Bill}],
                
        })
        
        let bills = contracts.map(res => {return res.Bills})

        return res.status(200).json(...bills);
        
    
    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.deleteByIdBill = async (req, res) => {
    console.log('opa')
    const {
        idBill
    } = req.params;

    try {
 
        const bill = await Bill.destroy({
            where: {idBill: idBill},
        })
        console.log(bill)
        return res.status(200).json(bill);
        
    
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
}