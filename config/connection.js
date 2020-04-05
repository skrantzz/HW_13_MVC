// Set up MySQL connection.
var mysql = require("mysql");
var connection;
  
  if (process.env.JAWSDB_URL) {
      connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
        host: "us-cdbr-iron-east-01.cleardb.net",
        port: 3306,
        user: "b4edf71c1f2ffb",
        password: "e6466a5f",
        database: "burgers_db"
      });
  }
  
  connection.connection();
  
  module.exports = connection;