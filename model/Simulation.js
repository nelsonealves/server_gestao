const { Model, DataTypes } = require('sequelize');

class Simulation extends Model {
  static init(sequelize) {
    super.init({
      bills: DataTypes.JSON
    }, {
      sequelize,
      tableName: 'Simulation',
    });
  }

  static associate (models) {
    this.belongsTo(models.Scenario, {foreignKey: 'idScenario', targetKey: 'idScenario'});
  }
}

module.exports = Simulation;