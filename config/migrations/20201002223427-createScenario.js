'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('Scenario', {
      idScenario: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      idAnalyze:{
        type: Sequelize.INTEGER,
        references: {
           model: 'Analyzes',
           key: 'idAnalyze'
         },
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE'
       },
      economy: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      investiment: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      payback: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
     });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Scenario');
  }
};
