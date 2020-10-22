'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('Category', {
      idCategory: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      group: { 
         type: Sequelize.STRING,
         allowNull: false
      },
      modality: {
         type: Sequelize.STRING,
         allowNull: false
      },
      subgroup: {
         type: Sequelize.STRING,
         allowNull: false
      }
     });

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Category');
  }
};
