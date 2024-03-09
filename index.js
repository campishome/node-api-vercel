const express = require('express');
const mysql = require('mysql');
require('dotenv').config();
const app = express();
const PORT = 4000;

const connection = mysql.createConnection({
    connectionLimit:10,
    host:"202.28.34.197",
    user:"web66_65011212009",
    password:"65011212009@csmsu",
    database:"web66_65011212009"
});

// เชื่อมต่อกับ MySQL และ query ข้อมูลเมื่อเซิร์ฟเวอร์เริ่มทำงาน
connection.connect((err) => {
    if (err) {
        console.error('เกิดข้อผิดพลาดในการเชื่อมต่อกับ MySQL: ' + err.stack);
        return;
    }
    console.log('เชื่อมต่อกับ MySQL สำเร็จ');
    // ทดสอบ query ข้อมูล
    connection.query('SELECT 1 + 1 AS solution', (err, results) => {
        if (err) {
            console.error('เกิดข้อผิดพลาดในการ query ข้อมูล: ' + err.stack);
            return;
        }
        console.log('ผลลัพธ์: ', results[0].solution);
    });
});

app.get('/', (req, res) => {
    // ตรวจสอบการเชื่อมต่อกับฐานข้อมูล MySQL
    connection.connect((err) => {
        if (err) {
            console.error('เกิดข้อผิดพลาดในการเชื่อมต่อกับ MySQL: ' + err.stack);
            res.status(500).send('เกิดข้อผิดพลาดในการเชื่อมต่อกับ MySQL');
            return;
        }
        console.log('เชื่อมต่อกับ MySQL สำเร็จ');
        res.send('เชื่อมต่อกับฐานข้อมูล MySQL สำเร็จ');
    });
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

// เริ่มต้น Express server ที่ PORT ที่กำหนด
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
    // ปิดการเชื่อมต่อ MySQL เมื่อเซิร์ฟเวอร์เริ่มทำงาน
    connection.end();
});
