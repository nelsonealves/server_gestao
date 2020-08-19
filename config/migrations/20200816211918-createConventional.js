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
      idCategory:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'CategoryDealership',
          key: 'idCategory'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idDealership:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'CategoryDealership',
          key: 'idDealership'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
     });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Conventional');
  }
};
