'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('Bill', {
      idBill:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }, 
      measures: {
        type: Sequelize.JSON,
        allowNull: false
      },
      idContract:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Contract',
          key: 'idContract'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
     });

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Bill');
  }
};
