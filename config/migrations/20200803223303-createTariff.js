'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('Tariff', {
      idTariff:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }, 
      date:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      idCategoryDealership:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'CategoryDealership',
          key: 'idCategoryDealership'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
     });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tariff');
  }
};
