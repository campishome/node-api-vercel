import mysql from "mysql";
import util from "util";

// Create MySQL connection pool
const conn = mysql.createPool({
    connectionLimit: 10,
    host: "202.28.34.197",
    user: "web66_65011212009",
    password: "65011212009@csmsu",
    database: "web66_65011212009"
});

// Promisify the query method
const queryAsync = util.promisify(conn.query).bind(conn);

// Example function to fetch data from the database
async function fetchDataFromDatabase() {
    try {
        // Example SQL query
        const rows = await queryAsync('SELECT * FROM Movie');
        return rows;
    } catch (error) {
        // Handle error
        console.error('Error fetching data from the database:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
}

export { conn, queryAsync, fetchDataFromDatabase };
