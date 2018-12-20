// /api router
import express from 'express';
// import data from '../src/testData';
// console.log('data', data);
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../config';

/**
 * Create MongoDB Object
 */
let mdb;
MongoClient.connect(config.mongodbUri, { useNewUrlParser: true }, (err, db) => {

  // check for connection error
  assert.equal(null, err);

  mdb = db.db('learning-fullstack-javascript-dev');

});

// init express router
const router = express.Router();

/**
 * Get All Contests
 */
router.get('/contests', (req, res) => {

  let contests = {};

  mdb.collection('contests').find({})

    // use .project to select fields
    .project({
      categoryName: 1,
      contestName: 1,
      nameIds: 1
    })

    .each((err, contest) => {
      assert.equal(null, err);

        if(!contest){
          // no more contests
          res.send({ contests });
          return;
        }

        // add to new object
        contests[contest._id] = contest;

    });

    // res.send({
    //   contests: contests
    // });
});

/**
 * Get Contest Name Suggestions
 */
router.get('/names/:nameIds', (req, res) => {

  const nameIds = req.params.nameIds.split(',').map(ObjectID);

  let names = {};

  mdb.collection('names').find({ _id: {$in: nameIds }})

    .each((err, name) => {
      assert.equal(null, err);

        if(!name){
          // no more names
          res.send({ names });
          return;
        }

        // add to new object
        names[name._id] = name;

    });

});

/**
 * Get Single Contest
 */
router.get('/contest/:contestId', (req, res) => {

  mdb.collection('contests')
    .findOne({ _id: ObjectID(req.params.contestId) })
    .then(contest => res.send(contest))
    .catch(console.error);

});

export default router;