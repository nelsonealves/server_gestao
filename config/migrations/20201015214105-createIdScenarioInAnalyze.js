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
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
    )
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};