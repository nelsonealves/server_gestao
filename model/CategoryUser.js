const { Model, DataTypes } = require('sequelize');

class CategoryUser extends Model {
  static init(sequelize) {
    super.init({
        idCategoryUser: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        idUser: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'User',
            key: 'idUser'
          } 
        },
        idCategory: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'Category',
            key: 'idCategory'
          } 
        },
        startDate: DataTypes.DATE,
    }, {
      sequelize,
      tableName: 'CategoryUser',
    });
  }

  static associate(models) {
    this.belongsToMany(models.User);
    this.belongsToMany(models.Category);
}
}

module.exports = CategoryUser;
