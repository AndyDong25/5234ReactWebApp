var MySql = require("sync-mysql");

var connection = new MySql({
  host: "localhost",
  user: "root",
  password: "",
  database: "orderDB",
});

module.exports = connection;
