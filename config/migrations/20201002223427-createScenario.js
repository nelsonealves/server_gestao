'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('Scenario', {
      idScenario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idTariff:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Tariff',
          key: 'idTariff'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      
      investiment: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      valueTotal: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      payback: {
        type: Sequelize.FLOAT,
        allowNull: true,
      }

    });

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Scenario');
  }
};
