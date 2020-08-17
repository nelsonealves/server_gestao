'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('States', [{
      uf: 'RJ'
    }, {
      uf: 'SC'
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('States', null, {});
  }
};
