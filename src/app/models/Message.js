import Sequelize, { Model } from 'sequelize';

class Message extends Model {
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
        content: {
          type: Sequelize.DataTypes.STRING,
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
        tableName: 'messages',
      }
    );
    return this;
  }
}

export default Message;
