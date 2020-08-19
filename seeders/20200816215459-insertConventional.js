module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Conventional', [{
      te: 1,
      tusd: 1,
      date: new Date(),
      idCategory: 4,
      idDealership: 1
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Conventional', null, {});
  }
};