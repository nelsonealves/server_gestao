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
    }, {
      sequelize,
      tableName: 'Contract',
    });
  }

  static associate(models) {
    this.belongsTo(models.Category, {foreignKey: 'idCategory'});
    this.belongsTo(models.Dealership, {foreignKey: 'idDealership'});
    this.belongsTo(models.ConsumerUnit, {foreignKey: 'idConsumerUnit'});
  }
}

module.exports = Contract;