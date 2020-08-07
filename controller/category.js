const Category = require('../model/Category');

module.exports.get = async (req, res) => {
    const { 
        idCategory
    } = req.params;
  
    try {
        const category = await Category.findByPk(idCategory);
    
        /* Returns error if dealership doesnt exist */
        if (!category) {
            return res.status(400).json({ error: 'FOREIGN_NOT_FOUND' });
        }
        console.log('log');
        
    
        return res.status(404).json(category);
    
    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.getAll = async (req, res) => {
    try {
        const category = await Category.findAll();
    
        /* Returns error if dealership doesnt exist */
        if (!category) {
            return res.status(400).json({ error: 'FOREIGN_NOT_FOUND' });
        }
        
        return res.status(404).json(category);
    
    } catch (err) {
        return res.status(500).json(err);
    }
    
}
