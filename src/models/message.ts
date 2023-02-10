const Sequelize = require('sequelize')
const sequelize = require('./sequelizeBase')
const messageModel = sequelize.define(
  'message',
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING(200),
      allowNull: false,
      field: 'title',
    },
    content: {
        type: Sequelize.STRING(2000),
        allowNull: false,
        field: 'content',
    },
    channel: {
        type: Sequelize.BIGINT,
        allowNull: false,
        field: 'channel',
    },
    createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
    },
  },
  {
    // 启用paranoid 删除
    paranoid: true,
    freezeTableName: true,
  }
)

export default messageModel