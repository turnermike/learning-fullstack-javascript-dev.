import config, { nodeEnv, logStars } from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import express from 'express';
const server = express();

// use node-sass-middleware module
server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public'),
  debug: true,
  outputStyle: 'compressed'
}));
// console.log('path', path.join(__dirname, 'public'));

// use ejs template language (Embeded Javascript)
// express will look for ejs templates under the 'views' dir
server.set('view engine', 'ejs');

// default route
server.get('/', (req, res) => {
  // res.send('Hello Express');
  res.render('index', {
    content: 'Hello Express and <em>EJS</em>!',
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

// using fs module
// import fs from 'fs';
// server.get('/about.html', (req, res) => {
//     // res.send('The about page');
//     fs.readFile('./about.html', (err, data) => {
//         res.send(data.toString());
//     });
// });

server.listen(config.port, () => {
  console.log('Express listening on port ', config.port);
});

// console.log('config', config);      // default export object
// console.log('nodeEnv', nodeEnv);    // example of a variable export
// logStars('Testing ABC');            // example of a function export
