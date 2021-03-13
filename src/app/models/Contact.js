import Sequelize, { Model } from 'sequelize';

class Contact extends Model {
  static init(sequelize) {
    super.init(
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
        },
      },
      {
        sequelize,
        schema: 'resume',
        tableName: 'contacts',
      }
    );

    return this;
  }
}

export default Contact;
