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
        this.hasMany(models.Conventional, { as: 'conventional', foreignKey: 'idTariff' });
        this.hasMany(models.White, { as: 'white', foreignKey: 'idTariff' });
        this.hasMany(models.Green, { as: 'green', foreignKey: 'idTariff' });
        this.hasMany(models.Blue, { as: 'blue', foreignKey: 'idTariff' });
    }
}

module.exports = Tariff;