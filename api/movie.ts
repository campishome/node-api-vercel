import express from "express";
import { conn } from "../dbconnect";
export const router = express.Router();

router.get("/show", (req, res) => {
    conn.query('SELECT * FROM Movie', (err, result, fields)=>{
      res.json(result);
    });
});