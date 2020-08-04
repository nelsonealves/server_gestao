const State = require('../model/State.js');

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
