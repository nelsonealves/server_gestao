const { Model, DataTypes } = require('sequelize');

class Consum extends Model {
  static init(sequelize) {
    super.init({
      measured: DataTypes.JSON,
    }, {
      sequelize,
      tableName: 'Consum',
      modelName: 'Consum',
      defaultPrimaryKey: false
    });
  }

  static associate (models) {
    this.belongsTo(models.Scenario, {foreignKey: 'idScenario', targetKey: 'idScenario'});
    this.belongsTo(models.Period, {foreignKey: 'idPeriod', targetKey: 'idPeriod'});
  }
}

module.exports = Consum;