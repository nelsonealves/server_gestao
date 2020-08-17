module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Blue', [{
      demandaPonta: 0.1,
      demandaForaPonta: 0.5,
      tePonta: 1,
      tusdPonta: 1,
      teForaPonta: 0.5,
      tusdForaPonta: 0.6,
      date: new Date(),
      idCategoryDealership: 1
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Blue', null, {});
  }
};