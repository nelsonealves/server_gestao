'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('CategoryDealership', {
      idCategory:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Category',
          key: 'idCategory'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idDealership:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Dealership',
          key: 'idDealership'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
     });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CategoryDealership');
  }
};
