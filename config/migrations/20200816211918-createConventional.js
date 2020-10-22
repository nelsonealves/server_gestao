'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('Conventional', {
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
      te:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      tusd:{
        type: Sequelize.FLOAT,
        allowNull: false,
      }
     });

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Conventional');
  }
};
