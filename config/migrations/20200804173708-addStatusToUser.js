'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return await queryInterface.addColumn('User', `status`, {
      type: Sequelize.INTEGER,
      allowNull: false
    })
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
