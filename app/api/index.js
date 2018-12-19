import express from 'express';
import data from '../src/testData';
// console.log('data', data);

const router = express.Router();

const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  // console.log('obj', obj);
  return obj;
}, {});

router.get('/contests', (req, res) => {
    res.send({
      contests: contests
    });
});

export default router;