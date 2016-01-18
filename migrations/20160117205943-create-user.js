'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
        .createTable('users', {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          createdAt: {
            type: Sequelize.DATE
          },
          updatedAt: {
            type: Sequelize.DATE
          },
          fb_id: Sequelize.STRING,
          username: Sequelize.STRING,
          first_name: Sequelize.STRING,
          last_name: Sequelize.STRING
        });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
