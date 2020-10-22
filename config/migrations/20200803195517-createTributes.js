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
       icms1: {
         type: Sequelize.FLOAT,
         allowNull: false
       },
       icms2: {
         type: Sequelize.FLOAT,
         allowNull: false
       },
       uf: {
         type: Sequelize.STRING(2),
         allowNull: false,
         references: {
           model: 'States',
           key: 'uf'
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
