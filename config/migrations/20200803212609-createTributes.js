'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('Tributes', {
       idTributes: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
       },
       date: { 
         type: Sequelize.DATE,
         allowNull: false
       },
       cofins: {
         type: Sequelize.FLOAT,
         allowNull: false
       },
       pis: {
         type: Sequelize.FLOAT,
         allowNull: false
       },
       idDealership: {
         type: Sequelize.INTEGER,
         allowNull: false,
         references: {
           model: 'Dealership',
           key: 'idDealership'
         },
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE'
       }

     });

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Tributes');
  }
};
