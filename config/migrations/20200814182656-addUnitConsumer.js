'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('ConsumerUnit', {
      idConsumerUnit: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      name: { 
         type: Sequelize.STRING,
         allowNull: false,
         unique: true
      },
      idUser:{
        type: Sequelize.INTEGER,
        references: {
           model: 'User',
           key: 'idUser'
         },
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE'
       }

     });

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('ConsumerUnit');
  }
};
