const State = require('../model/State.js');

/* Method: POST, URI: '/state'   */

module.exports.add = async (req, res) => {
  const { uf } = req.body;
  try {
    const newState = await State.create({ uf });
    return res.json(newState);
  } catch (err) {
    res.json({
      error: err.original.code
    });
  }
}

module.exports.getAll = async (req, res) => {
  try {
      const states = await State.findAll();
  
      /* Returns error if dealership doesnt exist */
      if (!states) {
          return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
      }
      
      return res.status(200).json(states);
  
  } catch (err) {
      return res.status(500).json(err);
  }
  
}