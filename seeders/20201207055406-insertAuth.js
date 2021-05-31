'use strict';

const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Auth', [
      {
      name: 'Gabriel',
      email: "gabriel@email.com",
      tel: '996957316',
      password: await bcrypt.hash('gabriel', 10),
      confirmEmail: true
    },{
      name: 'Nelson',
      email: "nelson@email.com",
      tel: '996957316',
      password: await bcrypt.hash('nelson', 10),
      confirmEmail: true
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Auth', null, {});
  }
};

