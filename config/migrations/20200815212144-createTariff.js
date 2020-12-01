'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tariff', {
      idTariff: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idCategory: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Category',
          key: 'idCategory'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idDealership: {
        type: Sequelize.INTEGER,

        references: {
          model: 'Dealership',
          key: 'idDealership'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      date: { 
        type: Sequelize.DATE,
        allowNull: false
      }

    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Tariff');
  }
};
