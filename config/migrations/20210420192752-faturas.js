'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Fatura', {
      idFatura: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idAuth: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Auth',
          key: 'idAuth'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fatura: {
        type: Sequelize.BLOB,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Fatura');
  }
};
