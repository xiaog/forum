const Sequelize = require('sequelize')
const sequelize = require('./sequelizeBase')
const channelModel = sequelize.define(
  'channel',
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING(200),
      allowNull: false,
      field: 'name',
    },
  },
  {
    // 启用paranoid 删除
    paranoid: true,
    freezeTableName: true,
  }
)

export default channelModel