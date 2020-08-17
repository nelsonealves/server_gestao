'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('Blue', {
      idBlue:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }, 
      tePonta:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      tusdPonta:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      demandaPonta:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      demandaForaPonta:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      teForaPonta:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      tusdForaPonta:{
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
    return queryInterface.dropTable('Blue');
  }
};
