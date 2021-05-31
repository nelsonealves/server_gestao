'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('Auth', {
      idAuth: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      tel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      confirmEmail: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
   
    });

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Auth');
  }
};
