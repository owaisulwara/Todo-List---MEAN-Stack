const mysql      = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  database : 'nodesql',
  multipleStatements : 'true'
});
// connection.connect();
module.exports = connection;