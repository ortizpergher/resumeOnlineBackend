"use strict";module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'contacts',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        phone: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        message: {
          type: Sequelize.DataTypes.TEXT,
          allowNull: false,
        },
        read: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        created_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        schema: 'resume',
      }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable({
      tableName: 'contacts',
      schema: 'resume',
    });
  },
};
