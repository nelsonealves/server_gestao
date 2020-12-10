'use strict';

const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Auth', [
      {
      firstName: 'Gabriel',
      lastName: "Espindola",
      email: "gabriel@email.com",
      password: await bcrypt.hash('gabriel', 10)
    },{
      firstName: 'Nelson',
      lastName: "Espindola",
      email: "nelson@email.com",
      password: await bcrypt.hash('nelson', 10)
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Auth', null, {});
  }
};

