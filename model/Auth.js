const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const StatusAuth = require('./StatusAuth')
class Auth extends Model {
    static init(sequelize) {
        super.init({
            idAuth: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            confirmEmail: DataTypes.BOOLEAN,
            tel: DataTypes.STRING,
            password: DataTypes.STRING,

        }, {
            sequelize,
            tableName: 'Auth',
        });
    }

    static associate(models) {
        this.hasMany(models.User, {foreignKey: 'idAuth'});
    }
}

module.exports = Auth;