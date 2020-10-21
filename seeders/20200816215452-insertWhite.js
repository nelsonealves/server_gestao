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
      tusdPonta: 1,
      teIntermed: 0.4,
      tusdIntermed: 0.6,
      teForaPonta: 0.5,
      tusdForaPonta: 0.6,
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