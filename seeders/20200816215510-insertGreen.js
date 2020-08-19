module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Green', [{
      tePonta: 1,
      tusdPonta: 1,
      demandaUnica: 0.8,
      teForaPonta: 0.5,
      tusdForaPonta: 0.6,
      date: new Date(),
      idCategory: 1,
      idDealership: 1
    },{
      tePonta: 0.9,
      tusdPonta: 1,
      demandaUnica: 0.8,
      teForaPonta: 0.8,
      tusdForaPonta: 0.7,
      date: new Date(),
      idCategory: 1,
      idDealership: 2
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Green', null, {});
  }
};