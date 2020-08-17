'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('CDAndCU', {
      idCDAndCU:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
      idDealership:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ConsumerUnit',
          key: 'idConsumerUnit'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false
      }
     });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CDAndCU');
  }
};
