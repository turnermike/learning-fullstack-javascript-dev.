// /api router

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

router.get('/contest/:contestId', (req, res) => {

  // res.send("hi");

  let contest = contests[req.params.contestId];
  console.log('contest', contest);
  contest.description = "Some place holder texy.";

  res.send(contest);

});

export default router;