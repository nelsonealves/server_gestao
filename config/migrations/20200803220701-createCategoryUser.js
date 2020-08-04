'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('CategoryUser', {
      idCategoryUser: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idCategory:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Category',
          key: 'idCategory'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idUser:{
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
          key: 'idUser'
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
    return queryInterface.dropTable('CategoryUser');
  }
};
