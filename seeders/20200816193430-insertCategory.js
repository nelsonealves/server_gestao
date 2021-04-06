'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Category', [
      /// Azul
      {
        group: "Grupo A",
        modality: "Azul",
        subgroup: "A1"
      },{
        group: "Grupo A",
        modality: "Azul",
        subgroup: "A2"
      },{
        group: "Grupo A",
        modality: "Azul",
        subgroup: "A3"
      },{
        group: "Grupo A",
        modality: "Azul",
        subgroup: "A3a"
      },{
        group: "Grupo A",
        modality: "Azul",
        subgroup: "A4"
      }, 
      /// Verde
      {
        group: "Grupo A",
        modality: "Verde",
        subgroup: "A1"
      },{
        group: "Grupo A",
        modality: "Verde",
        subgroup: "A2"
      },{
        group: "Grupo A",
        modality: "Verde",
        subgroup: "A3"
      },{
        group: "Grupo A",
        modality: "Verde",
        subgroup: "A3a"
      },{
        group: "Grupo A",
        modality: "Verde",
        subgroup: "A4"
      },
      /// Branca
      {
        group: "Grupo B",
        modality: "Branca",
        subgroup: "B1"
      }, {
        group: "Grupo B",
        modality: "Branca",
        subgroup: "B2"
      }, {
        group: "Grupo B",
        modality: "Branca",
        subgroup: "B3"
      },
      /// Convencional
      {
        group: "Grupo B",
        modality: "Convencional",
        subgroup: "B1"
      }, {
        group: "Grupo B",
        modality: "Convencional",
        subgroup: "B2"
      }, {
        group: "Grupo B",
        modality: "Convencional",
        subgroup: "B3"
      },
      // Fatura em B
      {
        group: "Grupo A",
        modality: "FaturadoB",
        subgroup: "B2"
      },{
        group: "Grupo A",
        modality: "FaturadoB",
        subgroup: "B3"
      }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Category', null, {});
  }
};
