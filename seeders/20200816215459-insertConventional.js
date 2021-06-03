module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      const tariff = await queryInterface.bulkInsert('Tariff',[{
        idCategory: 16,
        idDealership: 1,
        date: new Date()
      }])

      await queryInterface.bulkInsert('Conventional', [{
        te: 0.274,
        tusd: 0.232,
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
      await queryInterface.bulkDelete('Green', null, {});
      await transaction.commit()
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};