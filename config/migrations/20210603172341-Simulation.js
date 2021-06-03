'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('Simulation', {
      idScenario:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Scenario',
          key: 'idScenario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      bills: {
        type: Sequelize.JSON,
        allowNull: false
      }

    });

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Simulation');
  }
};
