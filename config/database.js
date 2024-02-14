const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: process.env.HOST,
  user: process.env.username1,
  password: process.env.password,
  database: process.env.DB,
});

module.exports = connection
