"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("users", {
        fb_id: DataTypes.STRING,
        username: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING
    }, {
        classMethods: {
            //associate: function(models) {
            //    User.hasMany(models.Task)
            //}
        },
        getterMethods: {
            full_name: function() { return this.first_name + ' ' + this.last_name }
        }
    }
    );

    return User;
};