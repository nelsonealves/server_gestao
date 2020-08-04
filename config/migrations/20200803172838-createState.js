'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('States', {
       uf: {
         type: Sequelize.STRING(2),
         primaryKey: true,
       },
       createdAt: Sequelize.DATE,
       updatedAt: Sequelize.DATE



     });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('States');
  }
};
