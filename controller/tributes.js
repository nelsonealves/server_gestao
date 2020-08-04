const Tribute = require('../model/Tribute');
const State = require('../model/State');

module.exports.add = async (req, res) => {
  const { date, icms1, icms2} = req.body;
  const { uf } = req.params;
  
  try {
    const ufObj = await State.findByPk(uf);
  
    if (!ufObj) {
        return res.status(400).json({ error: 'FOREIGN_NOT_FOUND' });
    }
    console.log(ufObj.dataValues.uf);
    const tribute = await Tribute.create({
      date,
      icms1,
      icms2,
      uf
    })
    console.log(tribute);
    return res.json(tribute);
      
    
  
  } catch(err) {
    
    return res.json(err);
  } 

  



  
  
}
