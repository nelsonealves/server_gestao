'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Period', [{
      type: 'unique'
    }, {
      type: 'ponta'
    }, {
      type: 'foraPonta'
    }, {
      type: 'intermediario'
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
