const { Model, DataTypes } = require('sequelize');

class Bill extends Model {
    static init(sequelize) {
        super.init({
            idBill: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            measures: {
                type: DataTypes.JSON,
                allowNull: false
            },
            
        }, {
            sequelize,
            tableName: 'Bill',
        });
    }

    static associate(models) {
        this.belongsTo(models.Contract, { foreignKey: 'idContract' });
        //this.hasMany(models.User, {foreignKey: 'idDealership'});
    }
}

module.exports = Bill;