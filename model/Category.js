const { Model, DataTypes } = require('sequelize');

class Category extends Model {
  static init(sequelize) {
    super.init({
        idCategory: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        group: DataTypes.STRING,
        modality: DataTypes.STRING,
        subgroup: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'Category',
    });
  }

  static associate(models) {
    this.belongsToMany(models.Dealership, {foreignKey: 'idCategory', through: 'CategoryDealership'});
  }
}

module.exports = Category;
