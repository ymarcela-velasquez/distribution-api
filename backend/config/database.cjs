async function getConfig() {
  const { config } = await import('./environment.js')

  const dbConfig = {
    test: {
      database: config.dbDatabase,
      username: config.dbUsername,
      password: config.dbPassword,
      logging: false,
      host: config.dbHost,
      port: config.dbPort,
      dialect: 'postgres',
      operatorsAliases: 0,
      pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000,
      },
      migrationStorageTableName: 'sequelize_meta_migrations',
    },
    development: {
      database: config.dbDatabase,
      username: config.dbUsername,
      password: config.dbPassword,
      logging: false,
      host: config.dbHost,
      port: config.dbPort,
      dialect: 'postgres',
      operatorsAliases: 0,
      pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000,
      },
      migrationStorageTableName: 'sequelize_meta_migrations',
    },
  }

  const env = dbConfig[config.environment]
  return env
}

module.exports = (async () => {
  const config = await getConfig()
  return config
})()
