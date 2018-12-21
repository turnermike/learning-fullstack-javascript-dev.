/**
 * @file api/index.js
 *
 * API router.
 *
 */
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

// Init express router,
const router = express.Router();

/**
 * Get all contests.
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

});

/**
 * Get contest name suggestions.
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
 * Get single contest.
 */
router.get('/contest/:contestId', (req, res) => {

  mdb.collection('contests')
    .findOne({ _id: ObjectID(req.params.contestId) })
    .then(contest => res.send(contest))
    .catch(error => {
      console.error(error.toString());
      res.status(404).send('Bad Request');  // return 404 error
    });

});

/**
 * Post a name suggestion for a contest.
 */
router.post('/names', (req, res) => {
  // console.log('req.body', req.body);
  // res.send(req.body);

  const contestId = ObjectID(req.body.contestId);
  const name = req.body.newName;
  // console.log('contestId', contestId);
  // console.log('name', name);

  // validation would go here

  // add the new name to the names table
  // add the new name's id to it's respective contest nameIds column
  // "doc" returned from the update promise is an instance of the inserted mongodb document
  mdb.collection('names').insertOne({ name }).then(result =>
    mdb.collection('contests').findOneAndUpdate(
        { _id: contestId },
        [],
        { $push: { nameIds: result.insertedId } },
        { new: true }
    ).then(doc =>
      res.send({
        updatedContest: doc.value,
        newName: { _id: result.insertedId, name}
      })
    )
  )
  .catch(error => {
    console.error(error.toString());
    res.status(404).send('Bad Request');  // return 404 error
  });

});

export default router;