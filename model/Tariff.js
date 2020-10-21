const { Model, DataTypes } = require('sequelize');

class Tariff extends Model {
    static init(sequelize) {
        super.init({
            idTariff: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
              },
              date: DataTypes.DATE
        }, {
            sequelize,
            tableName: 'Tariff',
        });
    }

    static associate(models) {
        this.belongsTo(models.Category, { foreignKey: 'idCategory' });
        this.belongsTo(models.CategoryDealership, { foreignKey: 'idDealership' });
        
    }
}

module.exports = Tariff;