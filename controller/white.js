const White = require('../model/White');
const Tariff = require('../model/Tariff');

module.exports.getDealershipCategory = async (req, res) => {
    try {
        const {
            idDealership,
            idCategory
        } = req.params;
        
        
        /* Return error if contract doesnt exist */
        
        const tariff = await White.findAll({
            where: {idDealership, idCategory},
            // include: [ConsumerUnit, Category, Dealership]
              
        });

        if (!tariff) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }

        return res.status(200).json(tariff);

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

        const white = await White.findOne({
            where: {idTariff: idTariff},
        });

        return res.status(200).json(white);

    } catch (err) {
        return res.status(500).json(err);
    }
}