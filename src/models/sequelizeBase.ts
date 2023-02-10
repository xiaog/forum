const Sequelize = require('sequelize')
const mysqlConfig = require('../config/mysql')
// 参数依次为：要导入的数据库名，账号，密码
const sequelize = new Sequelize(
  mysqlConfig.mysqlName,
  mysqlConfig.mysqlUserName,
  mysqlConfig.mysqlPassword,
  {
    host: mysqlConfig.mysqlIp,
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  }
)

module.exports = sequelize