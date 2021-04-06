const Contract = require('../model/Contract');
const ConsumerUnit = require('../model/ConsumerUnit');
const Dealership = require('../model/Dealership');
const Category = require('../model/Category');
const Conventional = require('../model/Conventional');
const CategoryDealership = require('../model/CategoryDealership');
const Infrastructure = require('../model/Infrastructure');
const Bill = require('../model/Bill');
const Analyze = require('../model/Analyze');
const Scenario = require('../model/Scenario');
const Tariff = require('../model/Tariff');
const { Op } = require("sequelize");

module.exports.getReactiveConsum = async (req, res) => {
    const {
        idDealership
    } = req.params;

    try {
        const category = await Category.findOne({
            where: {
                [Op.and]: [
                    {
                        group: 'Grupo B'
                    },{
                        modality: 'Convencional'
                    },{
                        subgroup: 'B1'
                    }
                ]
            }
        });

        /* Returns error if dealership doesnt exist */
        if (!category) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }
        const tariff = await Tariff.findAll({
            where: {
                [Op.and]: [
                    {
                        idCategory: category.idCategory
                    },{
                        idDealership
                    }
                ]
            }
        });
        const conventional = await Conventional.findOne({
            where: {
                idTariff: tariff[0].idTariff
            }
        });

        if (!conventional) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }
        
        return res.status(200).json(conventional);

    } catch (err) {
        return res.status(500).json(err);
    }
}