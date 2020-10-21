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
      date: { 
        type: Sequelize.DATE,
        allowNull: false
      }

    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
