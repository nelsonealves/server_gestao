'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Tributes', [{
      cofins: 3.5258,
      pis: 0.7679,
      date: new Date(),
      idDealership: 1
    },{
      cofins: 1.29,
      pis: 0.28,
      date: new Date(),
      idDealership: 2
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tributes', null, {});
  }
};
