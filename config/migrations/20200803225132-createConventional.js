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
      idTariff:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Tariff',
          key: 'idTariff'
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
