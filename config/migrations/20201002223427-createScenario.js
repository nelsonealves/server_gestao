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
      substation: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      diesel: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      valueTotal: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      optimization: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      reactive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }

    });

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Scenario');
  }
};
