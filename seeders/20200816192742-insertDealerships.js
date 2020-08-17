'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Dealership', [{
      name: "Empresa 1",
      uf: "RJ"
    },{
      name: "Empresa 2",
      uf: "SC"
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Dealership', null, {});
  }
};
