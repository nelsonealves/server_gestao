'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Period', [{
      period: 'unique'
    }, {
      period: 'ponta'
    }, {
      period: 'foraPonta'
    }, {
      period: 'intermediario'
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
