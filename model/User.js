const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
        idUser: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        status: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        typeId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        name: DataTypes.STRING,
        identification: DataTypes.STRING,
        email: DataTypes.STRING,
        tel1: DataTypes.STRING,
        tel2: DataTypes.STRING,
        cep: DataTypes.STRING,
        numCep: DataTypes.STRING,  
        idDealership: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Dealership',
            key: 'idDealership'
          }
        }  
    }, {
      sequelize,
      tableName: 'User',
    });
  }

  static associate(models) {
    this.belongsTo(models.Dealership, { foreignKey: 'idDealership'});
    // this.belongsToMany(models.Category, {foreignKey: 'idUser', through: 'CategoryUser', as: 'CategoryUser'});
  }
}

module.exports = User;
