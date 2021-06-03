'use strict';


module.exports = {
   up: async (queryInterface, Sequelize) => {

      return queryInterface.createTable('User', {
         idUser: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
         },
         name: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         identification: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: true
         },
         email: {
            type: Sequelize.STRING,
            allowNull: true
         },
         tel: {
            type: Sequelize.STRING,
            allowNull: true
         },
         password: {
            type: Sequelize.STRING,
            allowNull: true
         },
         confirmEmail: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
         },
         idAuth: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
               model: 'Auth',
               key: 'idAuth'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
         }
      });

   },

   down: async (queryInterface, Sequelize) => {
      return await queryInterface.dropTable('User');
   }
};
