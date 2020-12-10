'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('Infrastructure', {
      idInfrastructure: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      voltage: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      phases: {
        type: Sequelize.INTEGER,
        allowNull: true,
        //unique: true
      },
      capDisju: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      capTransf: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      idConsumerUnit:{
        type: Sequelize.INTEGER,
        references: {
           model: 'ConsumerUnit',
           key: 'idConsumerUnit'
         },
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE'
       }

     });

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Infrastructure');
  }
};
