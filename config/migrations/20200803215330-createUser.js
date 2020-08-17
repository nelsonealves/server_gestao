'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('User', {
      idUser: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      name: { 
         type: Sequelize.STRING,
         allowNull: false,
         unique: true
      },
      identification: {
         type: Sequelize.STRING,
         allowNull: true,
         unique: true
      },
      email: {
         type: Sequelize.STRING,
         allowNull: true
      },
      tel1: {
         type: Sequelize.STRING,
         allowNull: true
      },
      tel2: {
         type: Sequelize.STRING,
         allowNull: true
      },
      
     });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User');
  }
};
