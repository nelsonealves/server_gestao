const { Model, DataTypes } = require('sequelize');

class Consum extends Model {
  static init(sequelize) {
    super.init({
      idReactive: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      measured: DataTypes.JSON,
      valueTotal: DataTypes.JSON,
    }, {
      sequelize,
      tableName: 'Reactive',
      modelName: 'Reactive',
      defaultPrimaryKey: false
    });
  }

  static associate (models) {
    this.belongsTo(models.Scenario, {primaryKey: true, foreignKey: 'idScenario', targetKey: 'idScenario'});
    this.belongsTo(models.Period, {primaryKey: true, foreignKey: 'idPeriod', targetKey: 'idPeriod'});
  }
}

module.exports = Consum;