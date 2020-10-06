'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('Analyzes', {
      idAnalyze: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      idConsumerUnit:{
        type: Sequelize.INTEGER,
        references: {
           model: 'ConsumerUnit',
           key: 'idConsumerUnit'
         },
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE'
       },
      date: {
        type: Sequelize.DATE,
        allowNull: true,
      }

     });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Analyze');
  }
};
