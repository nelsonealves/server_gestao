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