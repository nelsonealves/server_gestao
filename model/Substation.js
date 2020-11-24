const { Model, DataTypes } = require('sequelize');

class Substation extends Model {
    static init(sequelize) {
        super.init({
            idSubstation: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
              },
              potTransf: DataTypes.FLOAT,
              priceOeM: DataTypes.FLOAT,
              priceImplement: DataTypes.FLOAT,
        }, {
            sequelize,
            tableName: 'Substation',
        });
    }

    static associate(models) {
        this.belongsTo(models.Analyze, { foreignKey: 'idAnalyzes' });
    }
}

module.exports = Substation;