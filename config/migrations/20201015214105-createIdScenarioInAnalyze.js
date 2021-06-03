'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.addColumn('Analyzes',
    'idScenario', {
    type: Sequelize.INTEGER,
    references: {
      model: 'Scenario',
      key: 'idScenario'
    },
    allowNull: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
    )
  
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Analyzes', 'idScenario', { transaction: t })
       
      ]);
    });
  }
};
