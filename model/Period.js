const { Model, DataTypes } = require('sequelize');

class Period extends Model {
  static init(sequelize) {
    super.init({
      type: {
        type: DataTypes.STRING,
        primaryKey: true,
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