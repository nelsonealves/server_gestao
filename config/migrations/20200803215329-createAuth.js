'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('Auth', {
      idAuth: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      firstName: { 
        type: Sequelize.STRING,
        allowNull: false,
        
      },
      lastName: { 
        type: Sequelize.STRING,
        allowNull: false,
        
      },
      email: {
         type: Sequelize.STRING,
         allowNull: false,
         unique: true
      },
      password: {
         type: Sequelize.STRING,
         allowNull: false
      },
     });

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Auth');
  }
};
