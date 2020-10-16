const { Model, DataTypes } = require('sequelize');

class Conventional extends Model {
  static init(sequelize) {
    super.init({
        idConventional: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        te: DataTypes.FLOAT,
        tusd: DataTypes.FLOAT,
        date: DataTypes.DATE,
    }, {
      sequelize,
      tableName: 'Conventional',
    });
  }

  static associate(models) {
    this.belongsTo(models.CategoryDealership, {foreignKey: 'idCategory'});
    this.belongsTo(models.CategoryDealership, {foreignKey: 'idDealership'});
  }
}

module.exports = Conventional;