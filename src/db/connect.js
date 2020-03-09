const mysql = require('mysql2/promise');
const pool = mysql.createPool({
	host: "localhost",
	user: "oleg",
	database: "shopinfo",
	password: "fdk45hrejDr",
	waitForConnections: true,
	connectionLimit: 100,
	queueLimit: 0
});

module.exports = pool;
