const { Model, DataTypes } = require('sequelize');

class CategoryDealership extends Model {
  static init(sequelize) {
    super.init({
      idCategoryDealership: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    }, {
      sequelize,
      tableName: 'CategoryDealership',
    });
  }

  static associate (models) {
    this.belongsTo(models.Category, {foreignKey: 'idCategory'});
    this.belongsTo(models.Dealership, {foreignKey: 'idDealership'});
  }
}

module.exports = CategoryDealership;