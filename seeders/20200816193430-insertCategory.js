'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Category', [{
      group: "Grupo A",
      modality: "Azul",
      subgroup: "A1"
    },{
      group: "Grupo A",
      modality: "Verde",
      subgroup: "A1"
    }, {
      group: "Grupo B",
      modality: "Branca",
      subgroup: "B1"
    }, {
      group: "Grupo B",
      modality: "Convencional",
      subgroup: "B1"
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Category', null, {});
  }
};
