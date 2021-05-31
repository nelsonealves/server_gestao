'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('SimpleReport', {
      idSimpleReport: {
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
      reportText: {
        type: Sequelize.STRING,
        allowNull: false
      },
      actions: {
        type: Sequelize.JSON,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('SimpleReport');
  }
};
