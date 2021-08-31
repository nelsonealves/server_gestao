const Category = require('../model/Category');
const ConsumerUnit = require('../model/ConsumerUnit');
const Contract = require('../model/Contract');
const Tariff = require('../model/Tariff');

module.exports.get = async (req, res) => {
    const {
        idCategory
    } = req.params;

    try {
        const category = await Category.findByPk(idCategory);

        /* Returns error if dealership doesnt exist */
        if (!category) {
            return res.status(404).json({ error: 'FOREIGN_NOT_FOUND' });
        }
        console.log('log');


        return res.status(200).json(category);

    } catch (err) {
        return res.status(500).json(err);
    }
}
module.exports.getByNames = async (req, res) => {
    const {
        nameGroup,
        nameModality,
        nameSubgroup
    } = req.params;


    try {
        const category = await Category.findAll({
            where: {
                group: nameGroup,
                modality: nameModality,
                subgroup: nameSubgroup
            },

        });
        if (!category) {
            return res.status(404).json({ error: 'FOREIGN_NOT_FOUND' });
        }
        return res.status(200).json(category[0]);
    } catch (err) {
        return res.status(500).json([err]);
    }


}
module.exports.getByConsumerUnit = async (req, res) => {
    try {
        const {
            idConsumerUnit
        } = req.params;

        const consumerUnit = await ConsumerUnit.findByPk(idConsumerUnit);

        /* Returns error if dealership doesnt exist */
        if (!consumerUnit) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }
        const contract = await Contract.findAll({
            where: { idConsumerUnit: idConsumerUnit },
            include: [
                { model: Tariff, 
                    include:[
                        Category
                    ]} 
                ]


        });


        return res.status(200).json(contract[0].Tariff.Category);

    } catch (err) {
        console.log(err)
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
