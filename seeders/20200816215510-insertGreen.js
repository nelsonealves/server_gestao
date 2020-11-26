module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      const tariff1 = await queryInterface.bulkInsert('Tariff',[{
        idCategory: 2,
        idDealership: 1,
        date: new Date()
      }])
      const tariff2 = await queryInterface.bulkInsert('Tariff',[{
        idCategory: 2,
        idDealership: 2,
        date: new Date()
      }])
    await queryInterface.bulkInsert('Green', [{
      tePonta: 1.60,
      tusdPonta: 0.01,
      demandaUnica: 21.93,
      teForaPonta: 0.30,
      tusdForaPonta: 0.04,
      idTariff: tariff1
    },{
      tePonta: 0.9,
      tusdPonta: 1,
      demandaUnica: 0.8,
      teForaPonta: 0.8,
      tusdForaPonta: 0.7,
      idTariff: tariff2
    }]);
    await transaction.commit()
  } catch (err) {
    await transaction.rollback();
    throw err;
  }
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkDelete('Tariff', null, {});
      await queryInterface.bulkDelete('Green', null, {});
      await transaction.commit()
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
    
  }
};