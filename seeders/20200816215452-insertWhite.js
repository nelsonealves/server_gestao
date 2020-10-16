module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('White', [{
      tePonta: 1,
      tusdPonta: 1,
      teIntermed: 0.4,
      tusdIntermed: 0.6,
      teForaPonta: 0.5,
      tusdForaPonta: 0.6,
      date: new Date(),
      idCategory: 3,
      idDealership: 1
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('White', null, {});
  }
};