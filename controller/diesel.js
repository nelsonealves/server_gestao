const Analyze = require('../model/Analyze');
const Diesel = require('../model/Diesel')

module.exports.add = async (req, res) => {

    const {
        potGer,
        consGer,
        timeUtilization,
        priceOeM,
        priceDiesel,
        priceImplement
    } = req.body;


    const { idAnalyzes } = req.params;
    try {
        const analyze = await Analyze.findByPk(idAnalyzes);

        if (!analyze) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        const diesel = await Diesel.create({
            potGer,
            consGer,
            timeUtilization,
            priceOeM,
            priceDiesel,
            priceImplement,
            idAnalyzes
        })

        return res.status(200).json(diesel);

    } catch (err) {
        return res.status(500).json(err);
    }


}
