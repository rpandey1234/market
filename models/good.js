"use strict";

module.exports = function(sequelize, DataTypes) {
    var Good = sequelize.define("goods", {
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
            transaction: DataTypes.INTEGER,
            expire_date: DataTypes.DATE
        }, {
            classMethods: {
                associate: function(models) {
                    Good.belongsTo(models.users, {
                        onDelete: "CASCADE",
                        foreignKey: {
                            allowNull: false
                        }
                    });
                }
            },
            getterMethods: {}
        }
    );

    return Good;
};