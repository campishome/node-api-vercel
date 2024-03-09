import express from 'express';

const router = express.Router();

import { queryAsync } from './dbconnect.js'; // Assuming you have your database connection exported from db.js

router.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM Movie';
        const movies = await queryAsync(query);

        res.json(movies);
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).send('Internal Server Error');
    }
});
export default router;
