const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

class Auth extends Model {
    static init(sequelize) {
        super.init({
            idStatus: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            type: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
        }, {
            sequelize,
            tableName: 'StatusAuth',
        });
    }

    static associate(models) {
        //this.hasMany(models.StatusAuth, {foreignKey: 'type'});
       
    }
}

module.exports = Auth;