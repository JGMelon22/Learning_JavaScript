// Connecting to a MySQL database (using "mysql2") and fetching some data
// TODO - Output on HTML textarea
var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Melon@123",
    database: "mock_employee"
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM employee LIMIT 10", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});