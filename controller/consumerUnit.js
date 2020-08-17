const User = require('../model/User');
const Dealership = require('../model/Dealership');
const ConsumerUnit = require('../model/ConsumerUnit');


module.exports.add = async (req, res) => {
    console.log("asda");
    const { 
        name,
        status, 
        identification, 
    } = req.body;
  
 
    const { idUser, idDealership } = req.params;
    try {
        const user = await User.findByPk(idUser);
        const dealership = await Dealership.findByPk(idDealership);
        
        if (!user || !dealership) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }
    
        const consumerUnit = await ConsumerUnit.create({
            name,
            status,
            identification,
            idUser,
            idDealership
        })
    
        return res.status(200).json(consumerUnit);
    
    } catch (err) {
        return res.status(500).json(err);
    }

  
}

module.exports.getAll = async (req, res) => {
    
    try {
        const consumerUnit = await ConsumerUnit.findAll();
    
        /* Returns error if dealership doesnt exist */
        if (!consumerUnit) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }
        
        return res.status(200).json(consumerUnit);
    
    } catch (err) {
        return res.status(500).json(err);
    }
    
    
    
}