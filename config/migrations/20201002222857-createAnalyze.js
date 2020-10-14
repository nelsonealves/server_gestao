'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('Analyzes', {
      idAnalyze: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      idContract:{
        type: Sequelize.INTEGER,
        references: {
           model: 'Contract',
           key: 'idContract'
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
    return queryInterface.dropTable('Analyzes');
  }
};
