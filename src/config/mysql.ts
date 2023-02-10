type NodeEnv = {
    /**
     *数据库名
     * @type {string}
     */
    mysqlName?: string
    /**
     *数据库用户名
     * @type {string}
     */
    mysqlUserName?: string
    /**
     *数据库用户密码
     * @type {string}
     */
    mysqlPassword?: string
    /**
     *mysql部署的机器IP
     * @type {string}
     */
    mysqlIp?: string
  }
  
  const development: NodeEnv = {
    mysqlName: 'forum',
    mysqlUserName: 'root',
    mysqlPassword: '123456',
    mysqlIp: '127.0.0.1',
  }
  
  const production: NodeEnv = {
    mysqlName: 'forum',
    mysqlUserName: 'root',
    mysqlPassword: '123456',
    mysqlIp: '127.0.0.1',
  }

  module.exports = {
    development: development,
    production: production,
    test: development,
  }[process.env.NODE_ENV || 'development']