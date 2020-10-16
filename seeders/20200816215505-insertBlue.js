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
      idCategory: 1,
      idDealership: 1
    },{
      demandaPonta: 0.2,
      demandaForaPonta: 0.4,
      tePonta: 1.1,
      tusdPonta: 1.,
      teForaPonta: 0.7,
      tusdForaPonta: 0.8,
      date: new Date(),
      idCategory: 1,
      idDealership: 2
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Blue', null, {});
  }
};