const CategoryUser = require('../model/CategoryUser');
const User = require('../model/User');
const Category = require('../model/Category');

module.exports.add = async (req, res) => {
    const { 
        startDate
    } = req.body;
    
    const {
        idUser,
        idCategory
    } = req.params;
    
    /* Find dealership by Primary Key */
    const user = await User.findByPk(idUser);
    const category = await Category.findByPk(idCategory);

    /* Returns error if user and category doesnt exist */
    if (!user && !category) {
        return res.status(400).json({ error: 'FOREIGN_NOT_FOUND' });
    }
    
    try {
        const categoryUser = await CategoryUser.create({
            idUser,
            idCategory, 
            startDate
        })
    
        return res.status(200).json(categoryUser);
    
    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports.getAllByUser = (req, res) => {
    const { idUser } = req.params;

    CategoryUser.findAll({
        where: {
            idUser: idUser
        }
    }).then(value => {
        return res.status(200).json(value)
    });
}

module.exports.getLatestOfUser = (req, res) => {

}
