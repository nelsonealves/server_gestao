'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('DemandContracted', {
      idScenario:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Scenario',
          key: 'idScenario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      period:{
        type: Sequelize.STRING,
        primaryKey: true,
        references: {
          model: 'Period',
          key: 'type'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      
      measured: {
        type: Sequelize.JSON,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('DemandContracted');
  }
};
