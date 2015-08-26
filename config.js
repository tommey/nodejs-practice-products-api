var config = {};

config.port = process.env.PORT || 80;
config.mySqlConnection = process.env.DB_CONNECTION_STRING || "mysql://product:product@localhost:3306/product";

module.exports = config;

