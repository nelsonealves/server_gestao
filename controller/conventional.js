
const Conventional = require('../model/Conventional');
const Tariff = require('../model/Tariff');

module.exports.getDealershipCategory = async (req, res) => {
    try {
        const {
            idDealership,
            idCategory
        } = req.params;
        
        
        /* Return error if contract doesnt exist */
        const tariff = await Tariff.findOne({
            where: {idDealership, idCategory},
            // include: [ConsumerUnit, Category, Dealership]
              
        });

        if (!tariff) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }
        const conv = await Conventional.findOne({
            where: {idTariff: tariff.idTariff},
            // include: [ConsumerUnit, Category, Dealership]
              
        });

        return res.status(200).json(conv);

    } catch (err) {
        return res.status(500).json(err);
    }
}


module.exports.getByIdTariff = async (req, res) => {
    try {
        const {
            idTariff
        } = req.params;
        
        
        /* Return error if contract doesnt exist */
        const tariff = await Tariff.findByPk(idTariff);

        if (!tariff) {
            console.log('errou')
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        const conventional = await Conventional.findOne({
            where: {idTariff: idTariff},
        });

        return res.status(200).json(conventional);

    } catch (err) {
        return res.status(500).json(err);
    }
}