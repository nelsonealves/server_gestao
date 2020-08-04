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
