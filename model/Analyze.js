const { Model, DataTypes } = require('sequelize');

class Analyze extends Model {
    static init(sequelize) {
        super.init({
            idAnalyze: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false
            },
            
        }, {
            sequelize,
            tableName: 'Analyzes',
        });
    }

    static associate(models) {
        this.belongsTo(models.Contract, { foreignKey: 'idContract' });
        //this.hasMany(models.User, {foreignKey: 'idDealership'});
    }
}

module.exports = Analyze;