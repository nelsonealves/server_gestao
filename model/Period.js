const { Model, DataTypes } = require('sequelize');

class Period extends Model {
  static init(sequelize) {
    super.init({
      idPeriod: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      period: {
        type: DataTypes.STRING,
      },
      
    }, {
      sequelize,
      tableName: 'Period',
    });
  }

  static associate (models) {
    
  }
}

module.exports = Period;