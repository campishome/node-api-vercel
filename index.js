const express = require('express');
const mysql = require('mysql'); // เพิ่มบรรทัดนี้
require('dotenv').config();
const app = express();
const PORT = 4000;

const connection = mysql.createConnection({
    host:"202.28.34.197",
    user:"web66_65011212009",
    password:"65011212009@csmsu",
    database:"web66_65011212009"
});

connection.connect((err) => {
    if (err) {
        console.error('เกิดข้อผิดพลาดในการเชื่อมต่อกับ MySQL: ' + err.stack);
        return;
    }

    console.log('เชื่อมต่อกับ MySQL สำเร็จ');
});

app.get('/', (req, res) => {
    res.send('This is my API, but from try.ts');
});

app.get('/api/movies', (req, res) => {
    // คำสั่ง SQL สำหรับการเลือกข้อมูล
    const sql = 'SELECT * FROM Movie';

    // ดึงข้อมูล
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('เกิดข้อผิดพลาดในการดึงข้อมูล: ' + err.stack);
            return res.status(500).json({ error: 'เกิดข้อผิดพลาดในการดึงข้อมูล' });
        }

        res.json(results);
    });
});

module.exports = app;
