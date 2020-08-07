const { Model, DataTypes } = require('sequelize');

class Dealership extends Model {
  static init(sequelize) {
    super.init({
      idDealership: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      cnpj: DataTypes.STRING,
      email: DataTypes.STRING,
      tel1: DataTypes.STRING,
      tel2: DataTypes.STRING,
      cep: DataTypes.STRING,
      numCep: DataTypes.INTEGER,
    }, {
      sequelize,
      tableName: 'Dealership',
    });
  }

  static associate (models) {
    this.belongsTo(models.State, {foreignKey: 'uf', as: 'state'});
    this.hasMany(models.User, {foreignKey: 'idDealership'});
  }
}

module.exports = Dealership;