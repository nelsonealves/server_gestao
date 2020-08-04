'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('Dealership', {
      idDealership: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      name: { 
         type: Sequelize.STRING,
         allowNull: false
      },
      cnpj: {
         type: Sequelize.STRING,
         allowNull: true
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
      cep: {
        type: Sequelize.STRING,
        allowNull: true
      },
      numCep: {
        type: Sequelize.STRING,
        allowNull: true
      },
      uf:{
        type: Sequelize.STRING(2),
         references: {
           model: 'States',
           key: 'uf'
         },
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE'
       }

     });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Dealership');
  }
};
