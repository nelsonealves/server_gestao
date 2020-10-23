const { Model, DataTypes } = require('sequelize');

class Demand extends Model {
  static init(sequelize) {
    super.init({
      measured: DataTypes.JSON,
    }, {
      sequelize,
      tableName: 'Demand',
    });
  }

  static associate (models) {
    this.belongsTo(models.Scenario, {foreignKey: 'idScenario', targetKey: 'idScenario'});
    this.belongsTo(models.Period, {foreignKey: 'type', targetKey: 'type'});
  }
}

module.exports = Demand;