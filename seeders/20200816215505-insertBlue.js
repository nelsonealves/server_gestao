module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      const tariff1 = await queryInterface.bulkInsert('Tariff',[{
        idCategory: 5,
        idDealership: 1,
        date: new Date()
      }]);

      const tariff2 = await queryInterface.bulkInsert('Tariff',[{
        idCategory: 5,
        idDealership: 2,
        date: new Date()
      }]);
      
      
      await queryInterface.bulkInsert('Blue', [{
        demandaPonta: 45.72,
        demandaForaPonta: 21.93,
        tePonta: 0.40,
        tusdPonta: 0.09,
        teForaPonta: 0.30,
        tusdForaPonta: 0.34,
        idTariff: tariff1
      },{
        demandaPonta: 0.2,
        demandaForaPonta: 0.4,
        tePonta: 1.1,
        tusdPonta: 1.,
        teForaPonta: 0.7,
        tusdForaPonta: 0.8,
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
      await queryInterface.bulkDelete('Blue', null, {});
      await transaction.commit()
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};