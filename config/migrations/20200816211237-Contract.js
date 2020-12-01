'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('Contract', {
      idContract:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
      idConsumerUnit:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ConsumerUnit',
          key: 'idConsumerUnit'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      icms: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false
      }
     });

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Contract');
  }
};
