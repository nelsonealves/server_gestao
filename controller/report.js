const Analyzes = require('../model/Analyze');
const Report = require('../model/SimpleReport');
const Contract = require('../model/Contract');
const Analyze = require('../model/Analyze');

const { Op } = require('sequelize')

module.exports.addReport = async (req, res) => {
    const {
        reportText,
        actions
    } = req.body;


    const {
        idAnalyzes,
    } = req.params;

    try {
        const analyze = await Analyzes.findByPk(idAnalyzes);

        if (!analyze) {
            return res.status(400).json({ error: 'NOT_FOUND' });
        }

        console.log('actions')
        console.log(actions)
        const report = await Report.create({
            idAnalyzes: parseInt(idAnalyzes),
            reportText,
            actions
        })

        return res.status(200).json(report);

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }

}


module.exports.getReportByConsumerUnit = async (req, res) => {
    try {
        const {
            idConsumerUnit
        } = req.params;

        /* Return error if contract doesnt exist */

        const contracts = await Contract.findAll({
            where: { idConsumerUnit: idConsumerUnit },
            include: [{
                model: Analyze, 
                include: [Report]
            }]
        });

        if (!contracts) {
            return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
        }

        let analyzes = contracts.map(res => { return res.Analyzes })
        return res.status(200).json(...analyzes);

    } catch (err) {
        return res.status(500).json(err);
    }
}


