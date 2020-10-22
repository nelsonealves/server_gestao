'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Period', {
      type: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
     
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Period');
  }
};
