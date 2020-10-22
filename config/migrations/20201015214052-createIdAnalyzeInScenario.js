'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.addColumn('Scenario',
      'idAnalyzes', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Analyzes',
        key: 'idAnalyzes'
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
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Scenario', 'idAnalyzes', { transaction: t })
       
      ]);
    });
  }
};
