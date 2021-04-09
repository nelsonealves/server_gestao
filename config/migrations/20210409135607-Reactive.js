'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reactive', {
      idReactive: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idScenario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Scenario',
          key: 'idScenario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idPeriod: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Period',
          key: 'idPeriod'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      measured: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      valueTotal: {
        type: Sequelize.JSON,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Reactive');
  }
};
