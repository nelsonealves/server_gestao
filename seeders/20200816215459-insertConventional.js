module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Conventional', [{
      te: 1,
      tusd: 1,
      date: new Date(),
      idCategoryDealership: 4
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Conventional', null, {});
  }
};