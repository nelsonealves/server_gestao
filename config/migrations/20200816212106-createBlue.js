'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('Blue', {
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
      }
     });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Blue');
  }
};
