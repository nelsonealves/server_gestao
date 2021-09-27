const Tribute = require('../model/Tribute');
const Contract = require('../model/Contract');
const Tariff = require('../model/Tariff');
const Dealership = require('../model/Dealership');
const ConsumerUnit = require('../model/ConsumerUnit');

module.exports.add = async (req, res) => {
  const { date, cofins, pis } = req.body;
  const { idDealership } = req.params;

  try {
    const dealership = await Dealership.findByPk(idDealership);

    if (!dealership) {
      return res.status(400).json({ error: 'FOREIGN_NOT_FOUND' });
    }

    const tribute = await Tribute.create({
      date,
      pis,
      cofins,
      idDealership
    })

    return res.json(tribute);



  } catch (err) {

    return res.json(err);
  }
}

module.exports.getByIdConsumerUnit = async (req, res) => {
  const {
    idConsumerUnit
  } = req.params;

  try {
    const consumer = await ConsumerUnit.findOne(
      {
        where: { idConsumerUnit: idConsumerUnit },
        include: [{
          model: Contract,
          include: [{
            model: Tariff,
            include: [{
              model: Dealership,
              include: [{
                model: Tribute
              }]
            }]
          }]
        }]
      });

    /* Returns error if dealership doesnt exist */
    if (!consumer) {
      return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
    }

    console.log(consumer.Contracts[0].Tariff.Dealership.Tributes)
    return res.status(200).json(consumer.Contracts[0].Tariff.Dealership.Tributes[0]);

  } catch (err) {
    console.log(err)
    return res.status(500).json(err);
  }

}

module.exports.getByIdDealership = async (req, res) => {
  const {
    idDealership
  } = req.params;

  try {

    const dealership = await Dealership.findOne(
      {
        where: { idDealership: idDealership },
      });

    /* Returns error if dealership doesnt exist */
    if (!dealership) {
      return res.status(400).json({ error: 'OBJ_NOT_FOUND' });
    }

    const tributes = await Tribute.findAll(
      {
        where: { idDealership: idDealership },
      });



    return res.status(200).json(tributes);

  } catch (err) {
    return res.status(500).json(err);
  }

}