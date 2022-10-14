var MySql = require("sync-mysql")

var connection = new MySql({
    host: "localhost",
    user: "root",
    password: "",
    database: "db"
});

module.exports = connection;