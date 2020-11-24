const Analyze = require('../model/Analyze');
const Substation = require('../model/Substation')

module.exports.add = async (req, res) => {

    const {
        potTransf,
        priceOeM,
        priceImplement
    } = req.body;


    const { idAnalyzes } = req.params;
    console.log('req.body')
    console.log(req.body)
    console.log('req.params')
    console.log(req.params)
    try {
        const analyze = await Analyze.findByPk(idAnalyzes);

        if (!analyze) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        const substation = await Substation.create({
            potTransf,
            priceOeM,
            priceImplement,
            idAnalyzes
        })

        return res.status(200).json(substation);

    } catch (err) {
        return res.status(500).json(err);
    }


}
