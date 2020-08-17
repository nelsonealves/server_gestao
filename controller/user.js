
const User = require('../model/User');

module.exports.add = async (req, res) => {
    const { 
        name,
        identification, 
        email, 
        tel1, 
        tel2,
    } = req.body;
  
    try {
        
        const user = await User.create({
            name,
            identification,
            email, 
            tel1, 
            tel2,
        })
        return res.status(200).json(user);
        
    } catch (err) {
        return res.status(500).json(err.errors);
    }
}

module.exports.getAll = async (req, res) => {
    console.log('opa');
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
