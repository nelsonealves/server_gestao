'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Diesel', {
      idDiesel: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idAnalyzes: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Analyzes',
          key: 'idAnalyzes'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      potGer: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      consGer: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      timeUtilization: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      priceOeM: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      priceDiesel: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      priceImplement: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Diesel');
  }
};
