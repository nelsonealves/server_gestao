
const User = require('../model/User');
const Dealership = require('../model/Dealership');

module.exports.add = async (req, res) => {
    const { 
        name,
        status,
        typeId,
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
    try {
        const user = await User.create({
            name,
            identification,
            typeId,
            status, 
            email, 
            tel1, 
            tel2,
            cep,
            numCep,
            idDealership
        })
    
        return res.status(200).json(user);
    
    } catch (err) {
        return res.status(500).json(err);
    }

  
  
}

module.exports.getAll = async (req, res) => {
    try {
        const users = await User.findAll();
    
        /* Returns error if dealership doesnt exist */
        if (!users) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }
        
        return res.status(200).json(users);
    
    } catch (err) {
        return res.status(500).json(err);
    }
    
}

module.exports.getDealershipInclude = async (req, res) => {
    
    const { userId } = req.params;
    
    try {
        
        User.findByPk(userId, { include: [Dealership] })
        .then(value => {
            res.json(value)
        })
    } catch (err) {
        res.json(err)
    }

}
