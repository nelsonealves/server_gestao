'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('Scenario', {
      // idScenario: {
      //    type: Sequelize.INTEGER,
      //    primaryKey: true,
      //    autoIncrement: true
      // },
      idAnalyze:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
           model: 'Analyzes',
           key: 'idAnalyze'
         },
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE'
       },
       idCategory:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
           model: 'CategoryDealership',
           key: 'idCategory'
         },
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE'
       },
       idDealeship:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
           model: 'CategoryDealership',
           key: 'idDealership'
         },
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE'
       },
     });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Scenario');
  }
};
