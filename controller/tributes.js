const Tribute = require('../model/Tribute');
const Dealership = require('../model/Dealership');

module.exports.add = async (req, res) => {
  const { date, cofins, pis} = req.body;
  const { idDealership } = req.params;
  
  try {
    const dealership = await Dealership.findByPk(idDealership);
    
    if (!dealership) {
        return res.status(400).json({ error: 'FOREIGN_NOT_FOUND' });
    }

    const tribute = await Tribute.create({
      date,
      pis,
      cofins,
      idDealership
    })
    
    return res.json(tribute);
      
    
  
  } catch(err) {
    
    return res.json(err);
  } 

  



  
  
}
