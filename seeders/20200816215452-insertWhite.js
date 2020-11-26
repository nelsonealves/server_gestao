module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
   
    const tariff = await queryInterface.bulkInsert('Tariff',[{
      idCategory: 3,
      idDealership: 1,
      date: new Date()
    }])
    
    console.log(tariff);

    await queryInterface.bulkInsert('White', [{
      tePonta: 1,
      tusdPonta: 0.8,
      teIntermed: 0.6,
      tusdIntermed: 0.1,
      teForaPonta: 0.4,
      tusdForaPonta: 0.07,
      idTariff: tariff
    }]);
    await transaction.commit();
  } catch (err) {
    await transaction.rollback();
    throw err;
  }
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkDelete('Tariff', null, {});
      await queryInterface.bulkDelete('White', null, {});
      await transaction.commit()
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};