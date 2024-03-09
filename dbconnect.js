import mysql from "mysql";
import util from "util";

// Create MySQL connection pool
export const conn = mysql.createPool({
    connectionLimit: 10,
    host: "202.28.34.197",
    user: "web66_65011212009",
    password: "65011212009@csmsu",
    database: "web66_65011212009"
});

// Promisify the query method
export const queryAsync = util.promisify(conn.query).bind(conn);
