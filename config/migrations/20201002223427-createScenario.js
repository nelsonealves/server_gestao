'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('Scenario', {
      idScenario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      // idAnalyze: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Analyze',
      //     key: 'idAnalyze'
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE'
      // },
      idCategory: {
        type: Sequelize.INTEGER,
        references: {
          model: 'CategoryDealership',
          key: 'idCategory'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idDealership: {
        type: Sequelize.INTEGER,

        references: {
          model: 'CategoryDealership',
          key: 'idDealership'
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
    return queryInterface.dropTable('Scenario');
  }
};
