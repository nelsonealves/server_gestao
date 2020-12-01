const { Model, DataTypes } = require('sequelize');

class Contract extends Model {
  static init(sequelize) {
    super.init({
        idContract: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        startDate: DataTypes.DATE ,
        icms: DataTypes.FLOAT ,
    }, {
      sequelize,
      tableName: 'Contract',
    });
  }

  static associate(models) {
    this.belongsTo(models.Tariff, {foreignKey: 'idTariff'});
    this.belongsTo(models.ConsumerUnit, {foreignKey: 'idConsumerUnit'});
    this.hasMany(models.Bill, {foreignKey: 'idContract'});
    this.hasMany(models.Analyze, {foreignKey: 'idAnalyzes'});
  }
}

module.exports = Contract;
