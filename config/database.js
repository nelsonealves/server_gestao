const env = require("../config.json");
module.exports = {
  dialect: 'mysql',
  host: env.db.host,
  username: env.db.username,
  port: env.db.port,
  password: env.db.password,
  database: env.db.database,
  define: {
    timestamps: false
  }
}
