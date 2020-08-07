const State = require('../model/State');
const Dealership = require('../model/Dealership');

module.exports.add = async (req, res) => {
    const { 
        name,
        cnpj, 
        email, 
        tel1, 
        tel2,
        cep,
        numCep,
    } = req.body;
  
 
    const { uf } = req.params;
    try {
        const ufObj = await State.findByPk(uf);
        
        if (!ufObj) {
            return res.status(400).json({ error: 'FOREIGN_NOT_FOUND' });
        }
    
        const dealership = await Dealership.create({
            name,
            cnpj, 
            email, 
            tel1, 
            tel2,
            cep,
            numCep,
            uf 
        })
    
        return res.status(200).json(dealership);
    
    } catch (err) {
        return res.json(err);
    }

  
  
}

module.exports.getById = async (req, res) => {
    const { 
        idDealership
    } = req.params;
  
    try {
        const dealership = await Dealership.findByPk(idDealership);
    
        /* Returns error if dealership doesnt exist */
        if (!dealership) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }
        
        return res.status(200).json(dealership);
    
    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.getAll = async (req, res) => {
    try {
        const dealerships = await Dealership.findAll();
    
        /* Returns error if dealership doesnt exist */
        if (!dealerships) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }
        
        return res.status(200).json(dealerships);
    
    } catch (err) {
        return res.status(500).json(err);
    }
    
}
