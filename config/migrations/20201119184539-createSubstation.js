'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Substation', {
      idSubstation: {
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
      potTransf: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      priceOeM: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      priceImplement: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Substation');
  }
};
