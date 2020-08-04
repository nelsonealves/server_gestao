const { Model, DataTypes } = require('sequelize');

class State extends Model {
  static init(sequelize) {
    super.init({
      uf: {
        type: DataTypes.STRING,
        primaryKey: true
      }

    }, {
      sequelize
    });
  }

  static associate (models) {
    this.hasMany(models.Tribute, {foreignKey: 'uf', as: 'tributes'});
    //this.hasMany(models.Dealership, {foreignKey: 'uf', as: 'dealerships'});
  }
}

module.exports = State;
