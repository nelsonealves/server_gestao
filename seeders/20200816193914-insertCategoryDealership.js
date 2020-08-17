'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('CategoryDealership', [{
      idDealership: 1,
      idCategory: 1
    }, {
      idDealership: 1,
      idCategory: 2
    }, {
      idDealership: 1,
      idCategory: 3
    }, {
      idDealership: 1,
      idCategory: 4
    }, {
      idDealership: 2,
      idCategory: 1
    },]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CategoryDealership', null, {});
  }
};
