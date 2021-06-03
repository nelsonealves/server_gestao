module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
   
    const tariff = await queryInterface.bulkInsert('Tariff',[{
      idCategory: 13,
      idDealership: 1,
      date: new Date()
    }])
    
    console.log(tariff);

    await queryInterface.bulkInsert('White', [{
      tePonta: 0.423,
      tusdPonta: 0.562,
      teIntermed: 0.261,
      tusdIntermed: 0.376,
      teForaPonta: 0.261,
      tusdForaPonta: 0.19,
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