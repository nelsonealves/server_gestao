const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
        idUser: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: DataTypes.STRING,
        identification: DataTypes.STRING,
        email: DataTypes.STRING,
        tel1: DataTypes.STRING,
        tel2: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'User',
    });
  }

  static associate(models) {
    this.belongsTo(models.Auth, {foreignKey: 'idAuth'});
    this.hasMany(models.ConsumerUnit, {foreignKey: 'idUser'});
    // this.belongsToMany(models.Category, {foreignKey: 'idUser', through: 'CategoryUser', as: 'CategoryUser'});
  }
}

module.exports = User;
