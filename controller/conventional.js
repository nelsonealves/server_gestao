
const Conventional = require('../model/Conventional');
const Tariff = require('../model/Tariff');

module.exports.getDealershipCategory = async (req, res) => {
    try {
        const {
            idDealership,
            idCategory
        } = req.params;
        
        
        /* Return error if contract doesnt exist */
        const tariff = await Tariff.findAll({
            where: {idDealership, idCategory},
            // include: [ConsumerUnit, Category, Dealership]
              
        });

        console.log('tariff');
        console.log(tariff);
        const conventional = await Conventional.findAll({
            where: {idTariff: tariff[0].idTariff},
        });

        if (!conventional) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }

        return res.status(200).json(conventional[0]);

    } catch (err) {
        return res.status(500).json(err);
    }
}