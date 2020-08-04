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
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      pis: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      cofins: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      idCategory:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Category',
          key: 'idCategory'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idUser:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'idUser'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
     });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bill');
  }
};
