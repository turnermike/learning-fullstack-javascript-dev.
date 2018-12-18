import express from 'express';
import data from '../src/testData';
// console.log('data', data);

const router = express.Router();

router.get('/contests', (req, res) => {
    res.send({ contests: data.contests });
});

export default router;