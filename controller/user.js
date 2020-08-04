
const User = require('../model/User');
const Dealership = require('../model/Dealership');
module.exports.add = async (req, res) => {
    const { 
        name,
        identification, 
        email, 
        tel1, 
        tel2,
        cep,
        numCep,
    } = req.body;
  
    const { idDealership } = req.params;
    
    /* Find dealership by Primary Key */
    const dealership = await Dealership.findByPk(idDealership);
    
    /* Returns error if dealership doesnt exist */
    if (!dealership) {
        return res.status(400).json({ error: 'FOREIGN_NOT_FOUND' });
    }
    console.log('log');
    try {
        const user = await User.create({
            name,
            identification, 
            email, 
            tel1, 
            tel2,
            cep,
            numCep,
            idDealership
        })
    
        return res.status(404).json(user);
    
    } catch (err) {
        return res.status(500).json(err);
    }

  
  
}
