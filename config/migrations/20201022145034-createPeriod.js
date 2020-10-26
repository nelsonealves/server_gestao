'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Period', {
      idPeriod: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      period: {
        type: Sequelize.STRING,
        
      },
     
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Period');
  }
};
