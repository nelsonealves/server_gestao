const { Model, DataTypes } = require('sequelize');

class Fatura extends Model {
    static init(sequelize) {
        super.init({
            idFatura: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            fatura: DataTypes.BLOB
        }, {
            sequelize,
            tableName: 'Fatura',
        });
    }

    static associate(models) {
        this.belongsTo(models.Auth, { foreignKey: 'idAuth' });
    }
}

module.exports = Fatura;