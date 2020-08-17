'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('Conventional', {
      idConventional:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }, 
      te:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      tusd:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
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
      }
     });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Conventional');
  }
};
